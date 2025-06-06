import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { AuthService } from "../services/authService";

export interface AuthState {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAdmin: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = AuthService.onAuthStateChange((user, isAdmin) => {
      setAuthState({
        user,
        isAdmin,
        loading: false,
        error: null,
      });
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    setAuthState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const result = await AuthService.signInWithGoogle();

      if (!result.success) {
        setAuthState((prev) => ({
          ...prev,
          loading: false,
          error: result.error || "Failed to sign in",
        }));
        return result;
      }

      // Success - state will be updated by onAuthStateChange
      setAuthState((prev) => ({ ...prev, loading: false, error: null }));
      return result;
    } catch (error: any) {
      const errorMessage = error.message || "Failed to sign in";
      setAuthState((prev) => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
      return { success: false, error: errorMessage };
    }
  };

  const signOut = async () => {
    setAuthState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      await AuthService.signOut();
      // State will be updated by onAuthStateChange
    } catch (error: any) {
      setAuthState((prev) => ({
        ...prev,
        loading: false,
        error: error.message || "Failed to sign out",
      }));
    }
  };

  const clearError = () => {
    setAuthState((prev) => ({ ...prev, error: null }));
  };

  return {
    ...authState,
    signInWithGoogle,
    signOut,
    clearError,
  };
};
