import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
      </div>
      <div className="">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/favorites">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
