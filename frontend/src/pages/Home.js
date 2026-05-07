import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div className="container">
      <h1 className="title">🚀 Team Management System</h1>
      <p className="subtitle">
        Manage your team members efficiently and professionally
      </p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/add">
          <button className="button" style={{ marginRight: "10px" }}>
            ➕ Add Member
          </button>
        </Link>

        <Link to="/members">
          <button className="button">
            👥 View Members
          </button>
        </Link>
      </div>

      {/* Extra Section for UI polish */}
      <div style={{ marginTop: "50px" }}>
        <p style={{ color: "#94a3b8" }}>
          Built using React, Node.js, Express & MongoDB
        </p>
      </div>
    </div>
  );
}

export default Home;