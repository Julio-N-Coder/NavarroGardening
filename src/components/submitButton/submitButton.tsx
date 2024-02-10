"use client";

import { useFormStatus } from "react-dom";
import styles from "./submitButton.module.css";
import React from "react";

export default function SubmitButton() {
  const formStatus = useFormStatus();

  return (
    <button
      className={styles.button}
      type="submit"
      disabled={formStatus.pending}
    >
      Submit
    </button>
  );
}
