import React, { useEffect, useState } from 'react';
import { runFirebaseTest } from '../utils/firebaseTest';

export const FirebaseTest: React.FC = () => {
  const [testResults, setTestResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const runTest = async () => {
      try {
        console.log('Starting Firebase configuration test...');
        const results = await runFirebaseTest();
        setTestResults(results);
      } catch (error) {
        console.error('Test failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Run test after a short delay to ensure everything is loaded
    setTimeout(runTest, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>Testing Firebase...</span>
        </div>
      </div>
    );
  }

  if (!testResults) {
    return (
      <div className="fixed top-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50">
        <span>Firebase test failed to run</span>
      </div>
    );
  }

  const totalTests = Object.keys(testResults).length;
  const passedTests = Object.values(testResults).filter(Boolean).length;
  const allPassed = passedTests === totalTests;

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 max-w-xs ${
      allPassed ? 'bg-green-600' : 'bg-yellow-600'
    } text-white`}>
      <div className="text-sm">
        <div className="font-semibold mb-2">
          🔥 Firebase Status
        </div>
        <div className="text-xs space-y-1">
          {Object.entries(testResults).map(([service, passed]) => (
            <div key={service} className="flex items-center justify-between">
              <span className="capitalize">{service}:</span>
              <span>{passed ? '✅' : '❌'}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-white/20 text-xs">
          {allPassed ? (
            '🎉 Firebase Ready!'
          ) : (
            `⚠️ ${passedTests}/${totalTests} services OK`
          )}
        </div>
        <div className="text-xs mt-1 opacity-75">
          Check console for details
        </div>
      </div>
    </div>
  );
}; 