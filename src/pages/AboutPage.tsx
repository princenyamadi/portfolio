import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About | Portfolio</title>
        <meta name="description" content="Learn more about me and my journey as a developer." />
      </Helmet>
      <div className="container section">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Coming soon...</p>
      </div>
    </>
  );
};

export default AboutPage; 