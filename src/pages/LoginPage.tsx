import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Navigate, useLocation } from 'react-router-dom';
import { Shield, AlertCircle, LogIn } from 'lucide-react';
import GoogleButton from 'react-google-button';
import { useAuth } from '../hooks/useAuth';

const LoginPage: React.FC = () => {
  const { user, isAdmin, loading, error, signInWithGoogle, clearError } = useAuth();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || '/admin';

  // Clear error when component mounts
  useEffect(() => {
    clearError();
  }, [clearError]);

  // Redirect if already authenticated and admin
  if (user && isAdmin) {
    return <Navigate to={from} replace />;
  }

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Portfolio CMS</title>
        <meta name="description" content="Admin login for portfolio content management system" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-card border border-border rounded-lg shadow-lg p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">Admin Access</h1>
              <p className="text-muted-foreground">Sign in to manage your portfolio content</p>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-red-800 mb-1">Access Denied</h3>
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Google Sign In Button */}
            <div className="space-y-4">
              <GoogleButton
                onClick={handleGoogleSignIn}
                disabled={loading}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  fontSize: '16px',
                  height: '48px',
                }}
              />
              
              {loading && (
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                  <span className="text-sm">Signing in...</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start gap-3">
                <LogIn className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">Authorized Access Only</h3>
                  <p className="text-sm text-muted-foreground">
                    Only authorized email addresses can access the admin panel. 
                    Contact the administrator if you need access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              This is a secure admin area for content management.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage; 