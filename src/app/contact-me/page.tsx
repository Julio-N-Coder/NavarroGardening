"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/submitButton/submitButton";
import { isEmail, messageLength } from "@/lib/schema";
import { checkMessageOrEmail } from "@/lib/checkError";

export default function Contact() {
  const [pending, setPending] = useState(false);
  const [messageError, setMessageError] = useState({
    showError: false,
    message: "",
  });
  const [emailError, setEmailError] = useState({
    showError: false,
    message: "",
  });
  const [serverError, setServerError] = useState({
    showError: false,
    message: "",
  });
  const router = useRouter();

  // gets form values and sends to lambda
  const formSubmition = async (e: any) => {
    e.preventDefault();
    setPending(true);
    const email = e.target[0].value;
    const message = e.target[1].value;
    const honeypot = e.target[2].checked;

    const parsedEmail = isEmail.safeParse(email);
    const parsedMessage = messageLength.safeParse(message);

    // client checks
    if (honeypot) {
      console.log("test");
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].checked = false;
      router.push("/");
      return;
    }
    if (!parsedEmail.success) {
      setPending(false);
      setEmailError({
        showError: true,
        message: "Invalid Email",
      });
      return;
    } else if (!parsedMessage.success) {
      setPending(false);
      setMessageError({
        showError: true,
        message: "Message to big or small",
      });
      return;
    }

    // server checks
    const response = await fetch("http://localhost:3001/lambda", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message, honeypot }),
    });

    const data: { success: boolean; error: string } = await response.json();
    // console.log(data);

    if (data.success) {
      router.push("/sent");
      return;
    } else if (data.error === "Server Error") {
      setPending(false);
      setServerError({
        showError: true,
        message:
          "There Seems to be a problem with our server. We are sorry for the inconvenience. We will try to get this fixed as soon as possible",
      });
    }

    // first argument checks if email or message.
    checkMessageOrEmail("Email", setEmailError, data.error);
    checkMessageOrEmail("Message", setMessageError, data.error);
    setPending(false);
    return;
  };

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
        <form className={styles.form} onSubmit={formSubmition}>
          <div className={styles.center}>
            {serverError.showError && (
              <div
                className={`max-w-64 bg-red-300 rounded-md bg-opacity-70 text-center font-bold`}
              >
                {serverError.message}
              </div>
            )}
            {/* email label and error box div */}
            <div
              className={`${
                emailError.showError
                  ? "bg-red-400 rounded-md flex items-center gap-x-2 bg-opacity-80 shadow-xl shadow-red-400"
                  : ""
              }`}
            >
              <label className={`${styles.emailLabel}`} htmlFor="email">
                Email
              </label>
              {emailError.showError && (
                <p className="text-black">{emailError.message}</p>
              )}
            </div>
            {/* email input */}
            <input
              className={styles.input}
              id="email"
              name="email"
              // type="email"
              placeholder="Email"
              required={true}
            />
          </div>
          <div className={styles.center}>
            {/* message label and error box div */}
            <div
              className={`${
                messageError.showError
                  ? "bg-red-400 rounded-md flex flex-col items-center gap-x-2 bg-opacity-80 shadow-xl shadow-red-400"
                  : ""
              }`}
            >
              <label className={styles.messageLabel} htmlFor="message">
                {" "}
                Enter Message
              </label>
              {messageError.showError && (
                <p className="text-black">{messageError.message}</p>
              )}
            </div>
            {/* textArea input */}
            <textarea
              className={styles.message}
              id="message"
              name="message"
              placeholder="Enter Message Here"
              required={true}
            />
          </div>
          <input
            type="checkbox"
            name="honeypot"
            value="honeypot"
            style={{ display: "none" }}
          />
          <SubmitButton pending={pending} />
        </form>
      </main>
    </>
  );
}
