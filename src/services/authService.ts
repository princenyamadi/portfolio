import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { auth } from "../config/firebase";

// Email allowlist - Only these emails can access admin
const ADMIN_EMAILS = [
  "princenyamadi.pn@gmail.com", // Your email - update this!
  // Add more admin emails here if needed
];

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export class AuthService {
  // Sign in with Google
  static async signInWithGoogle(): Promise<{
    success: boolean;
    user?: User;
    error?: string;
  }> {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user email is in allowlist
      if (!user.email || !this.isAdminUser(user.email)) {
        await this.signOut(); // Sign out unauthorized user
        return {
          success: false,
          error:
            "Access denied. This email is not authorized for admin access.",
        };
      }

      return { success: true, user };
    } catch (error: any) {
      console.error("Sign in error:", error);
      return {
        success: false,
        error: error.message || "Failed to sign in",
      };
    }
  }

  // Sign out
  static async signOut(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
      throw error;
    }
  }

  // Check if email is in admin allowlist
  static isAdminUser(email: string): boolean {
    return ADMIN_EMAILS.includes(email.toLowerCase());
  }

  // Get current user
  static getCurrentUser(): User | null {
    return auth.currentUser;
  }

  // Check if current user is admin
  static isCurrentUserAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.email ? this.isAdminUser(user.email) : false;
  }

  // Listen to auth state changes
  static onAuthStateChange(
    callback: (user: User | null, isAdmin: boolean) => void
  ) {
    return onAuthStateChanged(auth, (user) => {
      const isAdmin = user?.email ? this.isAdminUser(user.email) : false;
      callback(user, isAdmin);
    });
  }
}

// Helper function to get user initials for avatar
export const getUserInitials = (user: User | null): string => {
  if (!user?.displayName) return "U";

  const names = user.displayName.split(" ");
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return `${names[0].charAt(0)}${names[names.length - 1].charAt(
    0
  )}`.toUpperCase();
};

// Helper function to get user display name
export const getUserDisplayName = (user: User | null): string => {
  return user?.displayName || user?.email || "User";
};
