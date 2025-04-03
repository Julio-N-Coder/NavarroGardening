import "./submitButton.css";

export default function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      className={`submit-button hover:bg-green-500 ${pending && "opacity-50"}`}
      type="submit"
      disabled={pending}
    >
      {!pending ? "Submit" : "Submitting..."}
    </button>
  );
}
