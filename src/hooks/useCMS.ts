import { useState, useEffect, useCallback } from "react";
import {
  CMSService,
  CMSProject,
  CMSBlogPost,
  CMSSkill,
  CMSTestimonial,
  BlogCategory,
} from "../services/cmsService";
import { Timestamp } from "firebase/firestore";

// Hook for fetching projects
export const useCMSProjects = () => {
  const [projects, setProjects] = useState<CMSProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await CMSService.getProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch projects");
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      const data = await CMSService.getProjects();
      setProjects(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch projects");
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  return { projects, loading, error, refetch };
};

// Hook for fetching featured projects
export const useCMSFeaturedProjects = () => {
  const [projects, setProjects] = useState<CMSProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        setLoading(true);
        const data = await CMSService.getFeaturedProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch featured projects");
        console.error("Error fetching featured projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  return { projects, loading, error };
};

// Hook for fetching single project
export const useCMSProject = (id: string | undefined) => {
  const [project, setProject] = useState<CMSProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await CMSService.getProject(id);
        setProject(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch project");
        console.error("Error fetching project:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  return { project, loading, error };
};

// Hook for fetching blog posts
export const useCMSBlogPosts = (publishedOnly: boolean = true) => {
  const [posts, setPosts] = useState<CMSBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const data = await CMSService.getBlogPosts(publishedOnly);
        setPosts(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch blog posts");
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [publishedOnly]);

  const refetch = async () => {
    try {
      setLoading(true);
      const data = await CMSService.getBlogPosts(publishedOnly);
      setPosts(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch blog posts");
      console.error("Error fetching blog posts:", err);
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, refetch };
};

// Hook for fetching featured blog posts
export const useCMSFeaturedBlogPosts = () => {
  const [posts, setPosts] = useState<CMSBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedBlogPosts = async () => {
      try {
        setLoading(true);
        const data = await CMSService.getFeaturedBlogPosts();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch featured blog posts");
        console.error("Error fetching featured blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlogPosts();
  }, []);

  return { posts, loading, error };
};

// Hook for fetching skills
export const useCMSSkills = () => {
  const [skills, setSkills] = useState<CMSSkill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const data = await CMSService.getSkills();
        setSkills(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch skills");
        console.error("Error fetching skills:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      const data = await CMSService.getSkills();
      setSkills(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch skills");
      console.error("Error fetching skills:", err);
    } finally {
      setLoading(false);
    }
  };

  return { skills, loading, error, refetch };
};

// Hook for fetching testimonials
export const useCMSTestimonials = () => {
  const [testimonials, setTestimonials] = useState<CMSTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const data = await CMSService.getTestimonials();
        setTestimonials(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch testimonials");
        console.error("Error fetching testimonials:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      const data = await CMSService.getTestimonials();
      setTestimonials(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch testimonials");
      console.error("Error fetching testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  return { testimonials, loading, error, refetch };
};

// Hook for fetching featured testimonials
export const useCMSFeaturedTestimonials = () => {
  const [testimonials, setTestimonials] = useState<CMSTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedTestimonials = async () => {
      try {
        setLoading(true);
        const data = await CMSService.getFeaturedTestimonials();
        setTestimonials(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch featured testimonials");
        console.error("Error fetching featured testimonials:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedTestimonials();
  }, []);

  return { testimonials, loading, error };
};

// Blog Management Hooks
export const useBlogPosts = (publishedOnly: boolean = true) => {
  const [posts, setPosts] = useState<CMSBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await CMSService.getBlogPosts(publishedOnly);
      setPosts(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load blog posts"
      );
    } finally {
      setLoading(false);
    }
  }, [publishedOnly]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const createPost = useCallback(
    async (post: Omit<CMSBlogPost, "id" | "createdAt" | "updatedAt">) => {
      try {
        setError(null);
        const id = await CMSService.createBlogPost(post);
        await loadPosts();
        return id;
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to create blog post"
        );
        throw err;
      }
    },
    [loadPosts]
  );

  const updatePost = useCallback(
    async (id: string, updates: Partial<CMSBlogPost>) => {
      try {
        setError(null);
        await CMSService.updateBlogPost(id, updates);
        await loadPosts();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to update blog post"
        );
        throw err;
      }
    },
    [loadPosts]
  );

  const deletePost = useCallback(
    async (id: string) => {
      try {
        setError(null);
        await CMSService.deleteBlogPost(id);
        await loadPosts();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to delete blog post"
        );
        throw err;
      }
    },
    [loadPosts]
  );

  const publishPost = useCallback(
    async (id: string, published: boolean) => {
      try {
        setError(null);
        await CMSService.updateBlogPost(id, {
          published,
          publishedAt: published ? Timestamp.now() : undefined,
        });
        await loadPosts();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to update blog post"
        );
        throw err;
      }
    },
    [loadPosts]
  );

  return {
    posts,
    loading,
    error,
    refresh: loadPosts,
    createPost,
    updatePost,
    deletePost,
    publishPost,
  };
};

export const useBlogCategories = () => {
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await CMSService.getBlogCategories();
      setCategories(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load blog categories"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const createCategory = useCallback(
    async (
      category: Omit<
        BlogCategory,
        "id" | "createdAt" | "updatedAt" | "postCount"
      >
    ) => {
      try {
        setError(null);
        const id = await CMSService.createBlogCategory(category);
        await loadCategories();
        return id;
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to create blog category"
        );
        throw err;
      }
    },
    [loadCategories]
  );

  const updateCategory = useCallback(
    async (id: string, updates: Partial<BlogCategory>) => {
      try {
        setError(null);
        await CMSService.updateBlogCategory(id, updates);
        await loadCategories();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to update blog category"
        );
        throw err;
      }
    },
    [loadCategories]
  );

  const deleteCategory = useCallback(
    async (id: string) => {
      try {
        setError(null);
        await CMSService.deleteBlogCategory(id);
        await loadCategories();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to delete blog category"
        );
        throw err;
      }
    },
    [loadCategories]
  );

  return {
    categories,
    loading,
    error,
    refresh: loadCategories,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};
