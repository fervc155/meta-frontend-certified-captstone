import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="container nav">
      <div className="logo">
        <img className="logo" src="/assets/Logo.svg" alt="logo" />
      </div>

      <ul className="nav-links">
        <li>
          <Link aria-label="On Click" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link aria-label="On Click" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link aria-label="On Click" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link aria-label="On Click" to="/reservations">
            Reservations
          </Link>
        </li>
        <li>
          <Link aria-label="On Click" to="/order">
            Order Online
          </Link>
        </li>
        <li>
          <Link aria-label="On Click" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
