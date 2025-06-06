// Quick Firebase configuration check - Run this in browser console
// Type: window.checkFirebase()

import { app } from "../config/firebase";

declare global {
  interface Window {
    checkFirebase: () => void;
  }
}

export const setupFirebaseCheck = () => {
  window.checkFirebase = () => {
    console.log("🔥 FIREBASE QUICK CHECK");
    console.log("======================");

    try {
      console.log("📱 App:", app?.name || "Not initialized");
      console.log("📊 Project ID:", app?.options?.projectId || "Not set");
      console.log("🌐 Auth Domain:", app?.options?.authDomain || "Not set");
      console.log(
        "💾 Storage Bucket:",
        app?.options?.storageBucket || "Not set"
      );

      console.log("\n🔐 Environment Variables:");
      console.log(
        "API Key:",
        import.meta.env.VITE_FIREBASE_API_KEY ? "✅ Set" : "❌ Missing"
      );
      console.log(
        "Auth Domain:",
        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? "✅ Set" : "❌ Missing"
      );
      console.log(
        "Project ID:",
        import.meta.env.VITE_FIREBASE_PROJECT_ID ? "✅ Set" : "❌ Missing"
      );
      console.log(
        "Storage Bucket:",
        import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ? "✅ Set" : "❌ Missing"
      );
      console.log(
        "Messaging Sender ID:",
        import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
          ? "✅ Set"
          : "❌ Missing"
      );
      console.log(
        "App ID:",
        import.meta.env.VITE_FIREBASE_APP_ID ? "✅ Set" : "❌ Missing"
      );

      if (app?.options?.projectId) {
        console.log("\n🎉 Firebase appears to be configured correctly!");
        console.log(
          "🌐 Console URL:",
          `https://console.firebase.google.com/project/${app.options.projectId}`
        );
      } else {
        console.log(
          "\n❌ Firebase configuration has issues. Check your environment variables."
        );
      }
    } catch (error) {
      console.error("💥 Error checking Firebase:", error);
    }
  };
};

// Auto-setup when this module is imported
setupFirebaseCheck();
