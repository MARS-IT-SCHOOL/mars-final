import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="visually-hidden">Loading...</span>
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      </div>
    </div>
  );
};

export default LoadingSpinner;
