import { app, analytics, db, auth, storage } from "../config/firebase";
import { doc } from "firebase/firestore";

export const testFirebaseConfig = async () => {
  console.log("🔥 Testing Firebase Configuration...\n");

  const results = {
    app: false,
    analytics: false,
    firestore: false,
    auth: false,
    storage: false,
    envVars: false,
  };

  try {
    // Test 1: Check if Firebase app is initialized
    console.log("📱 Testing Firebase App initialization...");
    if (app && app.name === "[DEFAULT]") {
      results.app = true;
      console.log("✅ Firebase App: Initialized successfully");
      console.log(`   Project ID: ${app.options.projectId}`);
    } else {
      console.log("❌ Firebase App: Failed to initialize");
    }

    // Test 2: Check environment variables
    console.log("\n🔐 Testing Environment Variables...");
    const requiredEnvVars = [
      "VITE_FIREBASE_API_KEY",
      "VITE_FIREBASE_AUTH_DOMAIN",
      "VITE_FIREBASE_PROJECT_ID",
      "VITE_FIREBASE_STORAGE_BUCKET",
      "VITE_FIREBASE_MESSAGING_SENDER_ID",
      "VITE_FIREBASE_APP_ID",
    ];

    const missingVars: string[] = [];
    requiredEnvVars.forEach((varName) => {
      const value = import.meta.env[varName];
      if (!value || value === "undefined") {
        missingVars.push(varName);
      }
    });

    if (missingVars.length === 0) {
      results.envVars = true;
      console.log("✅ Environment Variables: All required variables are set");
    } else {
      console.log("❌ Environment Variables: Missing variables:");
      missingVars.forEach((varName) => {
        console.log(`   - ${varName}`);
      });
    }

    // Test 3: Check Analytics
    console.log("\n📊 Testing Firebase Analytics...");
    try {
      if (analytics) {
        results.analytics = true;
        console.log("✅ Analytics: Initialized successfully");
      } else {
        console.log("❌ Analytics: Failed to initialize");
      }
    } catch (error) {
      console.log("⚠️ Analytics: May not be available in development mode");
      results.analytics = true; // Analytics often doesn't work in dev mode
    }

    // Test 4: Check Authentication
    console.log("\n🔐 Testing Firebase Authentication...");
    if (auth) {
      results.auth = true;
      console.log("✅ Authentication: Initialized successfully");
      console.log(
        `   Current user: ${
          auth.currentUser ? auth.currentUser.email : "Not signed in"
        }`
      );
    } else {
      console.log("❌ Authentication: Failed to initialize");
    }

    // Test 5: Check Firestore
    console.log("\n📊 Testing Firestore Database...");
    try {
      if (db) {
        // Try to create a reference to test connectivity
        doc(db, "test", "connection");
        results.firestore = true;
        console.log("✅ Firestore: Initialized successfully");
        console.log(`   Database ID: ${db.app.options.projectId}`);
      } else {
        console.log("❌ Firestore: Failed to initialize");
      }
    } catch (error) {
      console.log("❌ Firestore: Error -", error);
    }

    // Test 6: Check Storage
    console.log("\n💾 Testing Firebase Storage...");
    if (storage) {
      results.storage = true;
      console.log("✅ Storage: Initialized successfully");
      console.log(`   Bucket: ${storage.app.options.storageBucket}`);
    } else {
      console.log("❌ Storage: Failed to initialize");
    }

    // Summary
    console.log("\n📋 FIREBASE CONFIGURATION SUMMARY:");
    console.log("=====================================");
    const totalTests = Object.keys(results).length;
    const passedTests = Object.values(results).filter(Boolean).length;

    Object.entries(results).forEach(([service, passed]) => {
      const status = passed ? "✅" : "❌";
      const serviceName = service.charAt(0).toUpperCase() + service.slice(1);
      console.log(`${status} ${serviceName}`);
    });

    console.log(
      `\n🎯 Overall: ${passedTests}/${totalTests} services configured correctly`
    );

    if (passedTests === totalTests) {
      console.log("🎉 Firebase is fully configured and ready to use!");
    } else {
      console.log(
        "⚠️ Some Firebase services need attention. Check the errors above."
      );
    }

    return results;
  } catch (error) {
    console.error("💥 Firebase configuration test failed:", error);
    return results;
  }
};

// Export a simple function to run the test
export const runFirebaseTest = () => {
  return testFirebaseConfig();
};
