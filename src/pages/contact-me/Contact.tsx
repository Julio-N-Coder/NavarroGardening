import "./contact-me.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import SubmitButton from "../../components/submitButton/SubmitButton";
import { isEmail, messageLength } from "../../lib/schema";
import { checkMessageOrEmail } from "../../lib/checkError";

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
  const [generalError, setGeneralError] = useState({
    showError: false,
    message: "",
  });
  const navigation = useNavigate();

  // gets form values and sends to lambda
  const formSubmition = async (e: any) => {
    e.preventDefault();

    // resets errors and checks again
    setGeneralError({
      showError: false,
      message: "",
    });
    setMessageError({
      showError: false,
      message: "",
    });
    setEmailError({
      showError: false,
      message: "",
    });

    setPending(true);
    const email = e.target[0].value;
    const message = e.target[1].value;
    const honeypot = e.target[2].checked;

    const parsedEmail = isEmail.safeParse(email);
    const parsedMessage = messageLength.safeParse(message);

    // client checks
    if (honeypot) {
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].checked = false;
      navigation("/");
      return;
    }

    if (!parsedEmail.success || !parsedMessage.success) {
      if (!parsedEmail.success) {
        setEmailError({
          showError: true,
          message: "Invalid Email",
        });
      }
      if (!parsedMessage.success) {
        if ("error" in parsedMessage) {
          setMessageError({
            showError: true,
            message: parsedMessage.error.format()._errors[0],
          });
        }
      }
      setPending(false);
      return;
    }

    // fetching from server
    try {
      const response = await fetch(
        "https://3pvtrjehri.execute-api.us-west-1.amazonaws.com/prod/email-me",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, message, honeypot }),
        }
      );

      const data: { success: boolean; error: string } = await response.json();

      // server checks in order if stuccessful, if failed fetch, if server error
      if (data.success) {
        navigation("/sent");
        return;
      } else if (data.error === "Server Error") {
        setPending(false);
        setGeneralError({
          showError: true,
          message:
            "There Seems to be a problem with our server. We are sorry for the inconvenience. We will try to get this fixed as soon as possible",
        });
        return;
      }

      // first argument checks if email or message. pass state updater and error to display message
      checkMessageOrEmail("Email", setEmailError, data.error);
      checkMessageOrEmail("Message", setMessageError, data.error);
      setPending(false);
      return;
    } catch (error) {
      setPending(false);
      setGeneralError({
        showError: true,
        message:
          "There Seems to be a problem with The page. We are sorry for the inconvenience. We will try to get this fixed as soon as possible",
      });
      return;
    }
  };

  return (
    <>
      <h1 className="contact-title font-bold">Contact Page</h1>
      <main className="contact-main">
        {/* Left side of Contact info page */}
        <section className="contactInfo">
          <h1 className="leftTitle font-bold">
            If you would like to contact us, you can either:
          </h1>
          <article className="contact-center leftContactInfo">
            <span>Contact us through our email</span>
            <span className="contact-info" id="myemail">
              navarrogardening@gmail.com
            </span>
            <span>Contact us through our Phone number</span>
            <span className="contact-info">(805)-712-4856</span>
            <span>Or you can just contact us in the form here!</span>
          </article>
        </section>
        {/* Form section */}
        <form className="form" onSubmit={formSubmition}>
          <div className="contact-center">
            {generalError.showError && (
              <div
                className={`max-w-64 bg-red-300 rounded-md bg-opacity-70 text-center font-bold`}
              >
                {generalError.message}
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
              <label className="emailLabel" htmlFor="email">
                Email
              </label>
              {emailError.showError && (
                <p className="text-black">{emailError.message}</p>
              )}
            </div>
            {/* email input */}
            <input
              className="input"
              id="email"
              name="email"
              // type="email"
              placeholder="Email"
              required={true}
            />
          </div>
          <div className="contact-center">
            {/* message label and error box div */}
            <div
              className={`${
                messageError.showError
                  ? "bg-red-400 rounded-md flex flex-col items-center gap-x-2 bg-opacity-80 shadow shadow-red-400"
                  : ""
              }`}
            >
              <label className="messageLabel" htmlFor="message">
                {" "}
                Enter Message
              </label>
              {messageError.showError && (
                <p className="text-black">{messageError.message}</p>
              )}
            </div>
            {/* textArea input */}
            <textarea
              className="message bg-white"
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
