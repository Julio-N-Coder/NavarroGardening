import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function container() {
  return (
    <div className="antialiased">
      <div className="page-container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
