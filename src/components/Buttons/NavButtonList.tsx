import { NavButton } from "./NavButton";

export default function NavButtonList() {
  return (
    <nav className="sm:ml-4 inline-flex bg-green-900 p-1 rounded-md gap-0">
      <NavButton
        page="/"
        className="header-nav-buttons-base w-24 xs:w-36 sm:w-48 text-white hover:bg-green-800"
        activeClassName="header-nav-buttons-base w-24 xs:w-36 sm:w-48 bg-green-400 hover:bg-green-300"
        text="Home"
      />
      <NavButton
        page="/about"
        className="header-nav-buttons-base w-24 xs:w-36 sm:w-48 text-white hover:bg-green-800"
        activeClassName="header-nav-buttons-base w-24 xs:w-36 sm:w-48 bg-green-400 hover:bg-green-300"
        text="About"
      />
      <NavButton
        page="/contact-me"
        className="header-nav-buttons-base w-28 xs:w-36 sm:w-48 text-white hover:bg-green-800"
        activeClassName="header-nav-buttons-base w-28 xs:w-36 sm:w-48 bg-green-400 hover:bg-green-300"
        text="Contact Me"
      />
    </nav>
  );
}
