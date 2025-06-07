import { useState, useEffect } from "react";

export interface ContactSubmission {
  id: string;
  formId: string;
  formName: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  status: "new" | "contacted" | "qualified" | "proposal" | "won" | "lost";
  priority: "low" | "medium" | "high";
  source: string;
  submittedAt: Date;
  lastContactedAt?: Date;
  notes: string[];
  tags: string[];
  leadScore: number;
}

export interface ContactForm {
  id: string;
  name: string;
  title: string;
  description: string;
  fields: FormField[];
  settings: ContactFormSettings;
  isActive: boolean;
  submissions: number;
  conversionRate: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FormField {
  id: string;
  type:
    | "text"
    | "email"
    | "phone"
    | "textarea"
    | "select"
    | "radio"
    | "checkbox"
    | "file";
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
  order: number;
}

export interface ContactFormSettings {
  autoResponder: boolean;
  autoResponderSubject: string;
  autoResponderMessage: string;
  notificationEmail: string;
  redirectUrl?: string;
  requireCaptcha: boolean;
  enableLeadScoring: boolean;
  leadScoringRules: LeadScoringRule[];
}

export interface LeadScoringRule {
  id: string;
  field: string;
  condition: "equals" | "contains" | "greater_than" | "less_than";
  value: string;
  points: number;
}

export interface ContactAnalytics {
  totalSubmissions: number;
  qualifiedLeads: number;
  wonDeals: number;
  conversionRate: number;
  qualificationRate: number;
  avgLeadScore: number;
  topSources: { source: string; count: number }[];
  monthlyTrends: { month: string; submissions: number; qualified: number }[];
  projectTypeBreakdown: { type: string; count: number; avgScore: number }[];
}

export const useContacts = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [forms, setForms] = useState<ContactForm[]>([]);
  const [analytics, setAnalytics] = useState<ContactAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load submissions and forms
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      // TODO: Replace with actual Firebase calls
      // const [submissionsData, formsData] = await Promise.all([
      //   fetchSubmissions(),
      //   fetchForms()
      // ]);

      // Mock data for now
      const mockSubmissions: ContactSubmission[] = [
        {
          id: "1",
          formId: "form1",
          formName: "General Contact",
          name: "Sarah Johnson",
          email: "sarah@techstartup.com",
          phone: "+1 (555) 123-4567",
          company: "Tech Startup Inc.",
          message:
            "We need a complete e-commerce platform with inventory management. Looking for a full-stack developer.",
          projectType: "E-commerce Platform",
          budget: "$10,000 - $25,000",
          timeline: "3-4 months",
          status: "new",
          priority: "high",
          source: "Website Contact Form",
          submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          notes: [],
          tags: ["e-commerce", "high-budget", "urgent"],
          leadScore: 85,
        },
        // Add more mock data...
      ];

      const mockForms: ContactForm[] = [
        {
          id: "form1",
          name: "general-contact",
          title: "General Contact Form",
          description: "Main contact form for the portfolio website",
          fields: [
            {
              id: "1",
              type: "text",
              label: "Full Name",
              required: true,
              order: 1,
            },
            {
              id: "2",
              type: "email",
              label: "Email Address",
              required: true,
              order: 2,
            },
            {
              id: "3",
              type: "phone",
              label: "Phone Number",
              required: false,
              order: 3,
            },
            {
              id: "4",
              type: "text",
              label: "Company",
              required: false,
              order: 4,
            },
            {
              id: "5",
              type: "select",
              label: "Project Type",
              required: true,
              order: 5,
              options: [
                "Website Development",
                "Mobile App",
                "E-commerce Platform",
              ],
            },
            {
              id: "6",
              type: "textarea",
              label: "Project Description",
              required: true,
              order: 6,
            },
          ],
          settings: {
            autoResponder: true,
            autoResponderSubject: "Thank you for your inquiry!",
            autoResponderMessage:
              "Hi {name},\n\nThank you for reaching out! I've received your project inquiry and will get back to you within 24 hours.\n\nBest regards,\nPrince Nyamadi",
            notificationEmail: "prince@yourportfolio.com",
            requireCaptcha: true,
            enableLeadScoring: true,
            leadScoringRules: [],
          },
          isActive: true,
          submissions: 15,
          conversionRate: 12.5,
          createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        },
      ];

      setSubmissions(mockSubmissions);
      setForms(mockForms);
      setAnalytics(calculateAnalytics(mockSubmissions));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load contact data"
      );
    } finally {
      setLoading(false);
    }
  };

  const calculateAnalytics = (
    submissionsList: ContactSubmission[]
  ): ContactAnalytics => {
    const totalSubmissions = submissionsList.length;
    const qualifiedLeads = submissionsList.filter((s) =>
      ["qualified", "proposal", "won"].includes(s.status)
    ).length;
    const wonDeals = submissionsList.filter((s) => s.status === "won").length;

    const conversionRate =
      totalSubmissions > 0 ? (wonDeals / totalSubmissions) * 100 : 0;
    const qualificationRate =
      totalSubmissions > 0 ? (qualifiedLeads / totalSubmissions) * 100 : 0;
    const avgLeadScore =
      totalSubmissions > 0
        ? submissionsList.reduce((sum, s) => sum + s.leadScore, 0) /
          totalSubmissions
        : 0;

    // Calculate top sources
    const sourceMap = new Map<string, number>();
    submissionsList.forEach((s) => {
      sourceMap.set(s.source, (sourceMap.get(s.source) || 0) + 1);
    });
    const topSources = Array.from(sourceMap.entries())
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Calculate monthly trends (last 6 months)
    const monthlyTrends = Array.from({ length: 6 }, (_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const month = date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });

      const monthSubmissions = submissionsList.filter((s) => {
        const submissionDate = new Date(s.submittedAt);
        return (
          submissionDate.getMonth() === date.getMonth() &&
          submissionDate.getFullYear() === date.getFullYear()
        );
      });

      return {
        month,
        submissions: monthSubmissions.length,
        qualified: monthSubmissions.filter((s) =>
          ["qualified", "proposal", "won"].includes(s.status)
        ).length,
      };
    }).reverse();

    // Calculate project type breakdown
    const projectTypeMap = new Map<
      string,
      { count: number; totalScore: number }
    >();
    submissionsList.forEach((s) => {
      if (s.projectType) {
        const existing = projectTypeMap.get(s.projectType) || {
          count: 0,
          totalScore: 0,
        };
        projectTypeMap.set(s.projectType, {
          count: existing.count + 1,
          totalScore: existing.totalScore + s.leadScore,
        });
      }
    });

    const projectTypeBreakdown = Array.from(projectTypeMap.entries())
      .map(([type, data]) => ({
        type,
        count: data.count,
        avgScore: data.totalScore / data.count,
      }))
      .sort((a, b) => b.count - a.count);

    return {
      totalSubmissions,
      qualifiedLeads,
      wonDeals,
      conversionRate,
      qualificationRate,
      avgLeadScore,
      topSources,
      monthlyTrends,
      projectTypeBreakdown,
    };
  };

  const submitContact = async (
    contactData: any
  ): Promise<{ success: boolean; submissionId?: string; error?: string }> => {
    try {
      // Calculate lead score
      const leadScore = calculateLeadScore(contactData);

      const submission: Omit<ContactSubmission, "id"> = {
        ...contactData,
        status: "new" as const,
        priority:
          leadScore >= 70
            ? ("high" as const)
            : leadScore >= 50
            ? ("medium" as const)
            : ("low" as const),
        submittedAt: new Date(),
        notes: [],
        tags: [],
        leadScore,
        source: contactData.source || "Website Contact Form",
      };

      // TODO: Replace with actual Firebase submission
      // const submissionRef = await addDoc(collection(db, 'contact-submissions'), submission);
      // const submissionId = submissionRef.id;

      // Mock submission
      const submissionId = "mock-" + Date.now();
      const newSubmission: ContactSubmission = {
        ...submission,
        id: submissionId,
      };

      setSubmissions((prev) => [newSubmission, ...prev]);

      // Send auto-responder if enabled
      const form = forms.find((f) => f.id === contactData.formId);
      if (form?.settings.autoResponder) {
        await sendAutoResponder(submission, form.settings);
      }

      // Send notification to admin
      await sendAdminNotification(submission);

      return { success: true, submissionId };
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to submit form",
      };
    }
  };

  const calculateLeadScore = (data: any): number => {
    let score = 0;

    // Project type scoring
    const highValueProjects = [
      "E-commerce Platform",
      "Custom Software",
      "Mobile App Development",
    ];
    const mediumValueProjects = ["Website Development", "API Development"];

    if (highValueProjects.includes(data.projectType)) score += 30;
    else if (mediumValueProjects.includes(data.projectType)) score += 20;
    else score += 10;

    // Budget scoring
    if (data.budget?.includes("$50,000") || data.budget?.includes("Over"))
      score += 40;
    else if (
      data.budget?.includes("$25,000") ||
      data.budget?.includes("$10,000")
    )
      score += 30;
    else if (data.budget?.includes("$5,000")) score += 20;
    else score += 10;

    // Company presence
    if (data.company?.trim()) score += 15;

    // Phone provided
    if (data.phone?.trim()) score += 10;

    // Message quality (basic heuristic)
    if (data.message?.length > 100) score += 5;

    return Math.min(score, 100);
  };

  const sendAutoResponder = async (
    submission: Omit<ContactSubmission, "id">,
    settings: ContactFormSettings
  ): Promise<void> => {
    try {
      // TODO: Implement email sending with your preferred service (EmailJS, SendGrid, etc.)
      // For now, just log the auto-responder
      const emailContent = settings.autoResponderMessage
        .replace("{name}", submission.name)
        .replace("{email}", submission.email)
        .replace("{company}", submission.company || "");

      console.log("Auto-responder sent:", {
        to: submission.email,
        subject: settings.autoResponderSubject,
        content: emailContent,
      });
    } catch (error) {
      console.error("Failed to send auto-responder:", error);
    }
  };

  const sendAdminNotification = async (
    submission: Omit<ContactSubmission, "id">
  ): Promise<void> => {
    try {
      // TODO: Implement admin notification email
      console.log("Admin notification sent for new submission:", submission);
    } catch (error) {
      console.error("Failed to send admin notification:", error);
    }
  };

  const updateSubmissionStatus = async (
    id: string,
    status: ContactSubmission["status"]
  ): Promise<void> => {
    try {
      // TODO: Update in Firebase
      // await updateDoc(doc(db, 'contact-submissions', id), {
      //   status,
      //   lastContactedAt: new Date()
      // });

      setSubmissions((prev) =>
        prev.map((submission) =>
          submission.id === id
            ? { ...submission, status, lastContactedAt: new Date() }
            : submission
        )
      );
    } catch (error) {
      console.error("Error updating submission status:", error);
      throw error;
    }
  };

  const addNote = async (id: string, note: string): Promise<void> => {
    try {
      const timestamp = new Date().toLocaleString();
      const noteWithTimestamp = `${timestamp}: ${note}`;

      // TODO: Update in Firebase
      setSubmissions((prev) =>
        prev.map((submission) =>
          submission.id === id
            ? { ...submission, notes: [...submission.notes, noteWithTimestamp] }
            : submission
        )
      );
    } catch (error) {
      console.error("Error adding note:", error);
      throw error;
    }
  };

  const exportSubmissions = (
    submissionsList: ContactSubmission[] = submissions
  ): string => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Company",
      "Project Type",
      "Budget",
      "Status",
      "Priority",
      "Lead Score",
      "Submitted Date",
    ];
    const csvContent = [
      headers.join(","),
      ...submissionsList.map((submission) =>
        [
          submission.name,
          submission.email,
          submission.phone || "",
          submission.company || "",
          submission.projectType || "",
          submission.budget || "",
          submission.status,
          submission.priority,
          submission.leadScore,
          submission.submittedAt.toLocaleDateString(),
        ].join(",")
      ),
    ].join("\n");

    return csvContent;
  };

  const createForm = async (
    formData: Omit<
      ContactForm,
      "id" | "createdAt" | "updatedAt" | "submissions" | "conversionRate"
    >
  ): Promise<string> => {
    try {
      const newForm: ContactForm = {
        ...formData,
        id: "form-" + Date.now(),
        submissions: 0,
        conversionRate: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // TODO: Add to Firebase
      setForms((prev) => [...prev, newForm]);

      return newForm.id;
    } catch (error) {
      console.error("Error creating form:", error);
      throw error;
    }
  };

  const updateForm = async (
    id: string,
    updates: Partial<ContactForm>
  ): Promise<void> => {
    try {
      // TODO: Update in Firebase
      setForms((prev) =>
        prev.map((form) =>
          form.id === id ? { ...form, ...updates, updatedAt: new Date() } : form
        )
      );
    } catch (error) {
      console.error("Error updating form:", error);
      throw error;
    }
  };

  return {
    // Data
    submissions,
    forms,
    analytics,
    loading,
    error,

    // Actions
    submitContact,
    updateSubmissionStatus,
    addNote,
    exportSubmissions,
    createForm,
    updateForm,
    refetch: loadData,
  };
};

export default useContacts;
