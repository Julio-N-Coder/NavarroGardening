import React from "react";
import styles from "./page.module.css";

export default function Sent() {
  return (
    <main className={`${styles.main}`}>
      <h1 className={`${styles.title} font-bold`}>Thank you!</h1>
      <h2 className={`${styles.text} text-center`}>
        Your message has been sent.
      </h2>
      <h2 className={`${styles.text} text-center`}>
        We will get back to you as soon as possible.
      </h2>
      <h2 className={styles.text}>Have a nice day!</h2>
    </main>
  );
}
