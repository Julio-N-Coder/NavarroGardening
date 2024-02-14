"use client";

import styles from "./submitButton.module.css";
import React from "react";

export default function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      className={`${styles.button} hover:bg-green-500 ${
        pending && "opacity-50"
      }`}
      type="submit"
      disabled={pending}
    >
      {!pending ? "Submit" : "Submitting..."}
    </button>
  );
}
