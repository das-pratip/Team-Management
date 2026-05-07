import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">🚀 Team Manager</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Member</Link>
        <Link to="/members">Members</Link>
      </div>
    </div>
  );
}

export default Navbar;