import React from 'react';
import { Helmet } from 'react-helmet-async';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Portfolio</title>
        <meta name="description" content="Explore my portfolio of projects and applications." />
      </Helmet>
      <div className="container section">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">My Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Coming soon...</p>
      </div>
    </>
  );
};

export default ProjectsPage; 