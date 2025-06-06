import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  eventId?: string;
}

export class ErrorBoundary extends Component<Props, State> {
  private resetTimeoutId: number | null = null;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const eventId = this.generateEventId();
    
    this.setState({
      error,
      errorInfo,
      eventId
    });

    // Log the error to console for development
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you would send this to your error reporting service
    this.reportError(error, errorInfo, eventId);
  }

  generateEventId = (): string => {
    return `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  reportError = async (error: Error, errorInfo: ErrorInfo, eventId: string) => {
    // Simulate error reporting (replace with your actual error reporting service)
    try {
      const errorReport = {
        eventId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      // In a real application, you would send this to services like:
      // - Sentry
      // - LogRocket
      // - Bugsnag
      // - Custom error tracking service
      
      console.info('Error report generated:', errorReport);
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      eventId: undefined
    });
  };

  handleAutoRetry = () => {
    // Auto-retry after 5 seconds
    this.resetTimeoutId = window.setTimeout(() => {
      this.handleRetry();
    }, 5000);
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  componentWillUnmount() {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId);
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full bg-slate-800/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
            </motion.div>

            {/* Error Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-white mb-4"
            >
              Oops! Something went wrong
            </motion.h1>

            {/* Error Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-slate-300 mb-4">
                We encountered an unexpected error. Don't worry, our team has been notified and we're working on a fix.
              </p>
              
              {this.state.eventId && (
                <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-400 mb-1">Error ID for support:</p>
                  <code className="text-xs text-red-300 font-mono break-all">
                    {this.state.eventId}
                  </code>
                </div>
              )}

              {/* Development Error Details */}
              {import.meta.env.DEV && this.state.error && (
                <details className="text-left bg-slate-900/50 rounded-lg p-4 mt-4">
                  <summary className="text-sm text-red-400 cursor-pointer mb-2">
                    <Bug className="inline w-4 h-4 mr-2" />
                    Developer Details
                  </summary>
                  <div className="text-xs text-slate-300 space-y-2">
                    <div>
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div>
                        <strong>Stack Trace:</strong>
                        <pre className="mt-2 p-2 bg-slate-800 rounded text-xs overflow-auto max-h-32">
                          {this.state.error.stack}
                        </pre>
                      </div>
                    )}
                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre className="mt-2 p-2 bg-slate-800 rounded text-xs overflow-auto max-h-32">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <button
                onClick={this.handleRetry}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <div className="flex space-x-3">
                <button
                  onClick={this.handleReload}
                  className="flex-1 flex items-center justify-center space-x-2 bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Reload Page</span>
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="flex-1 flex items-center justify-center space-x-2 bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Home</span>
                </button>
              </div>

              {/* Contact Support */}
              <div className="pt-4 border-t border-slate-700">
                <p className="text-xs text-slate-400 mb-2">
                  Still having issues?
                </p>
                <a
                  href="mailto:support@portfolio.com?subject=Error Report&body=Error ID: {this.state.eventId}"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Support</span>
                </a>
              </div>
            </motion.div>

            {/* Auto-retry countdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 pt-4 border-t border-slate-700"
            >
              <AutoRetryCountdown onRetry={this.handleRetry} />
            </motion.div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Auto-retry countdown component
interface AutoRetryCountdownProps {
  onRetry: () => void;
  seconds?: number;
}

const AutoRetryCountdown: React.FC<AutoRetryCountdownProps> = ({ 
  onRetry, 
  seconds = 10 
}) => {
  const [countdown, setCountdown] = React.useState(seconds);
  const [isActive, setIsActive] = React.useState(true);

  React.useEffect(() => {
    if (!isActive || countdown <= 0) {
      if (countdown <= 0) {
        onRetry();
      }
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, isActive, onRetry]);

  const handleCancel = () => {
    setIsActive(false);
  };

  if (!isActive || countdown <= 0) {
    return null;
  }

  return (
    <div className="text-center">
      <p className="text-xs text-slate-400 mb-2">
        Auto-retrying in {countdown} second{countdown !== 1 ? 's' : ''}...
      </p>
      <button
        onClick={handleCancel}
        className="text-xs text-red-400 hover:text-red-300 transition-colors underline"
      >
        Cancel auto-retry
      </button>
    </div>
  );
};

// Higher-order component for easier usage
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};

export default ErrorBoundary; 