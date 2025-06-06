import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Portfolio</title>
        <meta name="description" content="Get in touch with me for projects and collaborations." />
      </Helmet>
      <div className="container section">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Coming soon...</p>
      </div>
    </>
  );
};

export default ContactPage; 