import React from 'react';

export const Loading = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    </>
  );
};
