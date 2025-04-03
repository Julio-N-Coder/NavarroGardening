import { NavLink } from "react-router";

interface Props {
  className: string;
  page: string;
  text: string;
  activeClassName?: string;
}

function NavButton({ className, activeClassName, page, text }: Props) {
  return (
    <NavLink
      to={page}
      className={({ isActive }) =>
        isActive ? (activeClassName ? activeClassName : className) : className
      }
    >
      {text}
    </NavLink>
  );
}

export { NavButton };
