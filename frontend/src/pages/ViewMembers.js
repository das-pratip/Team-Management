import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/members")
      .then((res) => setMembers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">👥 Team Members</h1>

      <div className="card-container">
        {members.map((m) => (
          <div className="card" key={m._id}>

            <img
              src={`http://localhost:5000/uploads/${m.image}`}
              alt=""
              className="profile-img"
            />

            <h3>{m.name}</h3>
            <p>{m.role}</p>

            <Link to={`/member/${m._id}`}>
              <button className="button">View Details</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembers;