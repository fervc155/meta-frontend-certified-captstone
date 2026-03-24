import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer py-5 mt-5">
      <div className="container row">
        <div className="col-3 as-center">
          <img src="/assets/Logo.svg" alt="logo" className="footer-logo" />
        </div>

        <div className="col-3">
          <h4>Contact</h4>
          <ul>
            <li>Chicago, USA</li>
            <li>+1 312-555-1234</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>

        <div className="col-6">
          <h4>Navigation</h4>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        <div className="col-4"></div>
      </div>
    </footer>
  );
}
