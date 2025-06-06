import React from 'react';
import { Helmet } from 'react-helmet-async';

const TemplateDetailPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Template Details | Portfolio</title>
      </Helmet>
      <div className="container section">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Template Details</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Coming soon...</p>
      </div>
    </>
  );
};

export default TemplateDetailPage; 