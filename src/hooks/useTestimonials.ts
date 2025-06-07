import { useState, useEffect } from "react";
import { CMSService, CMSTestimonial } from "../services/cmsService";

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<CMSTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load testimonials on mount
  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);
      const testimonialsData = await CMSService.getTestimonials();
      setTestimonials(testimonialsData);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load testimonials"
      );
      console.error("Error loading testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  const createTestimonial = async (
    testimonialData: Omit<CMSTestimonial, "id">
  ) => {
    try {
      setError(null);
      const newTestimonialId = await CMSService.createTestimonial(
        testimonialData
      );
      const newTestimonial = { id: newTestimonialId, ...testimonialData };
      setTestimonials((prev) => [newTestimonial, ...prev]);
      return newTestimonial;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to create testimonial"
      );
      throw err;
    }
  };

  const updateTestimonial = async (
    id: string,
    updates: Partial<CMSTestimonial>
  ) => {
    try {
      setError(null);
      await CMSService.updateTestimonial(id, updates);
      setTestimonials((prev) =>
        prev.map((testimonial) =>
          testimonial.id === id ? { ...testimonial, ...updates } : testimonial
        )
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update testimonial"
      );
      throw err;
    }
  };

  const deleteTestimonial = async (id: string) => {
    try {
      setError(null);
      await CMSService.deleteTestimonial(id);
      setTestimonials((prev) =>
        prev.filter((testimonial) => testimonial.id !== id)
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to delete testimonial"
      );
      throw err;
    }
  };

  const getTestimonialsByProject = (projectId: string) => {
    return testimonials.filter(
      (testimonial) => testimonial.project === projectId
    );
  };

  const getFeaturedTestimonials = () => {
    return testimonials
      .filter(
        (testimonial) =>
          testimonial.featured && testimonial.status === "approved"
      )
      .sort((a, b) => b.rating - a.rating);
  };

  const getPublicTestimonials = () => {
    return testimonials
      .filter(
        (testimonial) =>
          testimonial.isPublic && testimonial.status === "approved"
      )
      .sort((a, b) => b.dateReceived.toMillis() - a.dateReceived.toMillis());
  };

  return {
    testimonials,
    loading,
    error,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
    getTestimonialsByProject,
    getFeaturedTestimonials,
    getPublicTestimonials,
    refetch: loadTestimonials,
  };
};
