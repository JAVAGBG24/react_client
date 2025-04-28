import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      LOGO
      <nav className="navigation">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Essentials
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
