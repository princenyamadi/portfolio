import React from 'react';
import { Helmet } from 'react-helmet-async';

const TemplatesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Templates | Portfolio</title>
        <meta name="description" content="Browse and purchase premium application templates." />
      </Helmet>
      <div className="container section">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Premium Templates</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Coming soon...</p>
      </div>
    </>
  );
};

export default TemplatesPage; 