import React from "react";
import styles from "./page.module.css";
import sendMail from "@/server/action";
import SubmitButton from "@/components/submitButton/submitButton";

export default function Contact() {
  return (
    <>
      <h1 className={`${styles.title} font-bold`}>Contact Page</h1>
      <main className={styles.main}>
        {/* Left side of Contact info page */}
        <section className={styles.contactInfo}>
          <h1 className={`${styles.leftTitle} font-bold`}>
            If you would like to contact us, you can either:
          </h1>
          <article className={`${styles.center} ${styles.leftContactInfo}`}>
            <span>Contact us through our email</span>
            <span className={styles.info} id="myemail">
              navarrogardening@gmail.com
            </span>
            <span>Contact us through our Phone number</span>
            <span className={styles.info}>(805)-712-4856</span>
            <span>Or you can just contact us in the form here!</span>
          </article>
        </section>
        {/* Form section */}
        <form className={styles.form} action={sendMail}>
          <div className={styles.center}>
            <label className={styles.emailLabel} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              minLength={4}
              maxLength={35}
              required={true}
            />
          </div>
          <div className={styles.center}>
            <label className={styles.messageLabel} htmlFor="message">
              {" "}
              Enter Message
            </label>
            <textarea
              className={styles.message}
              id="message"
              name="message"
              placeholder="Enter Message Here"
              minLength={15}
              maxLength={500}
              required={true}
            />
          </div>
          <input
            type="checkbox"
            name="honeypot"
            value="honeypot"
            style={{ display: "none" }}
          />
          <SubmitButton />
        </form>
      </main>
    </>
  );
}
