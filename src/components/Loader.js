import React from "react";

export const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="text-center mb-4">
        <div className="spinner-border text-center">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  );
};
