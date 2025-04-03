import { NavButton } from "../../components/Buttons/NavButton";

export default function NotFound() {
  return (
    <main className="errorMain">
      <h1 className="errorTitle">Not Found</h1>
      <p className="errorSentence">Could not find requested resource</p>
      {/* change classname to make btn look like btn */}
      <NavButton
        page="/"
        className="active:bg-green-600 errorSentence"
        text="Return Home"
      />
    </main>
  );
}
