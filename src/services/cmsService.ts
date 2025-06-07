import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  query,
  orderBy,
  where,
  Timestamp,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "../config/firebase";

// Content Types
export interface CMSProject {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  imageUrl?: string;
  galleryUrls: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: "web-app" | "mobile-app" | "api" | "tool" | "other";
  status: "completed" | "in-progress" | "archived";
  featured: boolean;
  sortOrder: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CMSBlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl?: string;
  author: string;
  publishedAt: Timestamp;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: number;
  published: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CMSSkill {
  id?: string;
  name: string;
  level: number; // 0-100
  years: string;
  category: string;
  description: string;
  projects: number;
  icon: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CMSTestimonial {
  id?: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number; // 1-5
  project: string;
  relationship: "client" | "colleague" | "manager" | "partner";
  avatarUrl?: string;
  email?: string;
  linkedinUrl?: string;
  companyUrl?: string;
  dateReceived: Timestamp;
  featured: boolean;
  isPublic: boolean;
  status: "pending" | "approved" | "rejected";
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Enhanced Blog Category Type
export interface BlogCategory {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  postCount?: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Collection names
export const COLLECTIONS = {
  PROJECTS: "projects",
  BLOG_POSTS: "blogPosts",
  BLOG_CATEGORIES: "blog_categories",
  SKILLS: "skills",
  TESTIMONIALS: "testimonials",
} as const;

// CMS Service Class
export class CMSService {
  // =================== PROJECTS ===================

  static async getProjects(): Promise<CMSProject[]> {
    try {
      const q = query(
        collection(db, COLLECTIONS.PROJECTS),
        orderBy("sortOrder", "asc")
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CMSProject[];
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  }

  static async getFeaturedProjects(): Promise<CMSProject[]> {
    try {
      const q = query(
        collection(db, COLLECTIONS.PROJECTS),
        where("featured", "==", true),
        orderBy("sortOrder", "asc")
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CMSProject[];
    } catch (error) {
      console.error("Error fetching featured projects:", error);
      return [];
    }
  }

  static async getProject(id: string): Promise<CMSProject | null> {
    try {
      const docRef = doc(db, COLLECTIONS.PROJECTS, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        } as CMSProject;
      }
      return null;
    } catch (error) {
      console.error("Error fetching project:", error);
      return null;
    }
  }

  static async createProject(
    project: Omit<CMSProject, "id" | "createdAt" | "updatedAt">
  ): Promise<string> {
    try {
      const now = Timestamp.now();
      const docRef = await addDoc(collection(db, COLLECTIONS.PROJECTS), {
        ...project,
        createdAt: now,
        updatedAt: now,
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating project:", error);
      throw error;
    }
  }

  static async updateProject(
    id: string,
    updates: Partial<CMSProject>
  ): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.PROJECTS, id);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error updating project:", error);
      throw error;
    }
  }

  static async deleteProject(id: string): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.PROJECTS, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting project:", error);
      throw error;
    }
  }

  // =================== BLOG POSTS ===================

  static async getBlogPosts(
    publishedOnly: boolean = true
  ): Promise<CMSBlogPost[]> {
    try {
      let q = query(
        collection(db, COLLECTIONS.BLOG_POSTS),
        orderBy("publishedAt", "desc")
      );

      if (publishedOnly) {
        q = query(
          collection(db, COLLECTIONS.BLOG_POSTS),
          where("published", "==", true),
          orderBy("publishedAt", "desc")
        );
      }

      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CMSBlogPost[];
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  }

  static async getFeaturedBlogPosts(): Promise<CMSBlogPost[]> {
    try {
      const q = query(
        collection(db, COLLECTIONS.BLOG_POSTS),
        where("featured", "==", true),
        where("published", "==", true),
        orderBy("publishedAt", "desc")
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CMSBlogPost[];
    } catch (error) {
      console.error("Error fetching featured blog posts:", error);
      return [];
    }
  }

  static async getBlogPost(id: string): Promise<CMSBlogPost | null> {
    try {
      const docRef = doc(db, COLLECTIONS.BLOG_POSTS, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        } as CMSBlogPost;
      }
      return null;
    } catch (error) {
      console.error("Error fetching blog post:", error);
      return null;
    }
  }

  static async createBlogPost(
    post: Omit<CMSBlogPost, "id" | "createdAt" | "updatedAt">
  ): Promise<string> {
    try {
      const now = Timestamp.now();
      const docRef = await addDoc(collection(db, COLLECTIONS.BLOG_POSTS), {
        ...post,
        createdAt: now,
        updatedAt: now,
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating blog post:", error);
      throw error;
    }
  }

  static async updateBlogPost(
    id: string,
    updates: Partial<CMSBlogPost>
  ): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.BLOG_POSTS, id);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error updating blog post:", error);
      throw error;
    }
  }

  static async deleteBlogPost(id: string): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.BLOG_POSTS, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting blog post:", error);
      throw error;
    }
  }

  // =================== SKILLS ===================

  static async getSkills(): Promise<CMSSkill[]> {
    try {
      const q = query(
        collection(db, COLLECTIONS.SKILLS),
        orderBy("level", "desc")
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CMSSkill[];
    } catch (error) {
      console.error("Error fetching skills:", error);
      return [];
    }
  }

  static async createSkill(
    skill: Omit<CMSSkill, "id" | "createdAt" | "updatedAt">
  ): Promise<string> {
    try {
      const now = Timestamp.now();
      const docRef = await addDoc(collection(db, COLLECTIONS.SKILLS), {
        ...skill,
        createdAt: now,
        updatedAt: now,
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating skill:", error);
      throw error;
    }
  }

  static async updateSkill(
    id: string,
    updates: Partial<CMSSkill>
  ): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.SKILLS, id);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error updating skill:", error);
      throw error;
    }
  }

  static async deleteSkill(id: string): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.SKILLS, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting skill:", error);
      throw error;
    }
  }

  // =================== TESTIMONIALS ===================

  static async getTestimonials(): Promise<CMSTestimonial[]> {
    try {
      const q = query(
        collection(db, COLLECTIONS.TESTIMONIALS),
        orderBy("rating", "desc")
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CMSTestimonial[];
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return [];
    }
  }

  static async getFeaturedTestimonials(): Promise<CMSTestimonial[]> {
    try {
      const q = query(
        collection(db, COLLECTIONS.TESTIMONIALS),
        where("featured", "==", true),
        orderBy("rating", "desc")
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CMSTestimonial[];
    } catch (error) {
      console.error("Error fetching featured testimonials:", error);
      return [];
    }
  }

  static async createTestimonial(
    testimonial: Omit<CMSTestimonial, "id" | "createdAt" | "updatedAt">
  ): Promise<string> {
    try {
      const now = Timestamp.now();
      const docRef = await addDoc(collection(db, COLLECTIONS.TESTIMONIALS), {
        ...testimonial,
        createdAt: now,
        updatedAt: now,
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating testimonial:", error);
      throw error;
    }
  }

  static async updateTestimonial(
    id: string,
    updates: Partial<CMSTestimonial>
  ): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.TESTIMONIALS, id);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error updating testimonial:", error);
      throw error;
    }
  }

  static async deleteTestimonial(id: string): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.TESTIMONIALS, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      throw error;
    }
  }

  // =================== FILE UPLOAD ===================

  static async uploadFile(file: File, path: string): Promise<string> {
    try {
      const storageRef = ref(storage, path);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }

  static async deleteFile(path: string): Promise<void> {
    try {
      const storageRef = ref(storage, path);
      await deleteObject(storageRef);
    } catch (error) {
      console.error("Error deleting file:", error);
      throw error;
    }
  }

  // =================== BLOG CATEGORIES ===================

  static async getBlogCategories(): Promise<BlogCategory[]> {
    try {
      const q = query(
        collection(db, COLLECTIONS.BLOG_CATEGORIES),
        orderBy("name", "asc")
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as BlogCategory)
      );
    } catch (error) {
      console.error("Error fetching blog categories:", error);
      return [];
    }
  }

  static async createBlogCategory(
    category: Omit<BlogCategory, "id" | "createdAt" | "updatedAt" | "postCount">
  ): Promise<string> {
    try {
      const now = Timestamp.now();
      const categoryData: BlogCategory = {
        ...category,
        slug: category.slug || CMSService.generateSlug(category.name),
        postCount: 0,
        createdAt: now,
        updatedAt: now,
      };

      const docRef = await addDoc(
        collection(db, COLLECTIONS.BLOG_CATEGORIES),
        categoryData
      );
      return docRef.id;
    } catch (error) {
      console.error("Error creating blog category:", error);
      throw error;
    }
  }

  static async updateBlogCategory(
    id: string,
    updates: Partial<BlogCategory>
  ): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.BLOG_CATEGORIES, id);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error updating blog category:", error);
      throw error;
    }
  }

  static async deleteBlogCategory(id: string): Promise<void> {
    try {
      const docRef = doc(db, COLLECTIONS.BLOG_CATEGORIES, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting blog category:", error);
      throw error;
    }
  }

  // =================== UTILITY METHODS ===================

  static generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  static calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  }
}
