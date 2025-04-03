import "./header.css";
import NavButtonList from "../Buttons/NavButtonList";
import logo from "../../assets/navarro-gardening-logo-croped-small.jpg";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <div className="titleLogo">
        <h1 className="title font-bold">Navarro Gardening</h1>
        <NavLink to="/" className="logoContainer">
          <img
            className="logo"
            src={logo}
            alt="Navarro Gardening Logo"
            width={100}
            height={100}
          />
        </NavLink>
      </div>
      <NavButtonList />
    </header>
  );
}
