"use client";

import React from "react";

export default function Error({ reset }) {
  return (
    <div className="errorMain">
      <h2 className="errorTitle">Something went wrong!</h2>
      <button
        className="errorButton"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
