/**
 * Environment Configuration
 * Centralized management of all environment variables with validation
 */

interface EnvironmentConfig {
  // Firebase Configuration
  firebase: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string;
  };

  // API Keys (Third-party services)
  apis: {
    emailJs?: {
      serviceId?: string;
      templateId?: string;
      publicKey?: string;
    };
    sendGrid?: {
      apiKey?: string;
    };
    recaptcha?: {
      siteKey?: string;
    };
    analytics?: {
      googleAnalyticsId?: string;
    };
  };

  // Application Settings
  app: {
    environment: "development" | "staging" | "production";
    baseUrl: string;
    debugMode: boolean;
  };
}

/**
 * Validates that required environment variables are present
 */
const validateEnvironment = (): void => {
  const required = [
    "VITE_FIREBASE_API_KEY",
    "VITE_FIREBASE_AUTH_DOMAIN",
    "VITE_FIREBASE_PROJECT_ID",
    "VITE_FIREBASE_STORAGE_BUCKET",
    "VITE_FIREBASE_MESSAGING_SENDER_ID",
    "VITE_FIREBASE_APP_ID",
  ];

  const missing = required.filter((key) => !import.meta.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}\n` +
        "Please check your .env file and ensure all required variables are set."
    );
  }
};

/**
 * Gets environment variable with optional default value
 */
const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key] || defaultValue;
  if (!value) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }
  return value;
};

/**
 * Gets optional environment variable
 */
const getOptionalEnvVar = (key: string): string | undefined => {
  return import.meta.env[key];
};

/**
 * Determines current environment
 */
const getCurrentEnvironment = (): "development" | "staging" | "production" => {
  const env = import.meta.env.MODE;
  if (env === "production") return "production";
  if (env === "staging") return "staging";
  return "development";
};

// Validate environment on module load
validateEnvironment();

/**
 * Centralized environment configuration
 * All environment variables should be accessed through this object
 */
export const env: EnvironmentConfig = {
  firebase: {
    apiKey: getEnvVar("VITE_FIREBASE_API_KEY"),
    authDomain: getEnvVar("VITE_FIREBASE_AUTH_DOMAIN"),
    projectId: getEnvVar("VITE_FIREBASE_PROJECT_ID"),
    storageBucket: getEnvVar("VITE_FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: getEnvVar("VITE_FIREBASE_MESSAGING_SENDER_ID"),
    appId: getEnvVar("VITE_FIREBASE_APP_ID"),
    measurementId: getOptionalEnvVar("VITE_FIREBASE_MEASUREMENT_ID"),
  },

  apis: {
    emailJs: {
      serviceId: getOptionalEnvVar("VITE_EMAILJS_SERVICE_ID"),
      templateId: getOptionalEnvVar("VITE_EMAILJS_TEMPLATE_ID"),
      publicKey: getOptionalEnvVar("VITE_EMAILJS_PUBLIC_KEY"),
    },
    sendGrid: {
      apiKey: getOptionalEnvVar("VITE_SENDGRID_API_KEY"),
    },
    recaptcha: {
      siteKey: getOptionalEnvVar("VITE_RECAPTCHA_SITE_KEY"),
    },
    analytics: {
      googleAnalyticsId: getOptionalEnvVar("VITE_GOOGLE_ANALYTICS_ID"),
    },
  },

  app: {
    environment: getCurrentEnvironment(),
    baseUrl: getEnvVar("VITE_BASE_URL", window.location.origin),
    debugMode: getCurrentEnvironment() === "development",
  },
};

/**
 * Runtime security checks
 */
export const securityChecks = {
  /**
   * Checks if we're in a secure context (HTTPS in production)
   */
  isSecureContext: (): boolean => {
    if (env.app.environment === "development") return true;
    return window.location.protocol === "https:";
  },

  /**
   * Validates that sensitive operations only happen in secure contexts
   */
  requireSecureContext: (): void => {
    if (!securityChecks.isSecureContext()) {
      throw new Error("This operation requires a secure context (HTTPS)");
    }
  },

  /**
   * Sanitizes environment data for logging (removes sensitive information)
   */
  getSafeEnvForLogging: () => ({
    environment: env.app.environment,
    baseUrl: env.app.baseUrl,
    debugMode: env.app.debugMode,
    firebase: {
      projectId: env.firebase.projectId,
      authDomain: env.firebase.authDomain,
      // Never log API keys!
    },
  }),
};

/**
 * Helper to check if a feature is enabled based on environment
 */
export const featureFlags = {
  enableDebugLogging: env.app.debugMode,
  enableAnalytics: !!env.apis.analytics?.googleAnalyticsId,
  enableEmailNotifications: !!(
    env.apis.emailJs?.serviceId || env.apis.sendGrid?.apiKey
  ),
  enableRecaptcha: !!env.apis.recaptcha?.siteKey,
};

export default env;
