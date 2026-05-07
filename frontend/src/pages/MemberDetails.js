import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/members/${id}`)
      .then((res) => setMember(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!member) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>{member.name}</h1>

      <img
        src={`http://localhost:5000/uploads/${member.image}`}
        className="profile-img"
        alt=""
      />

      <p><strong>Role:</strong> {member.role}</p>
      <p><strong>Email:</strong> {member.email}</p>
    </div>
  );
}

export default MemberDetails;