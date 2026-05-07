import { useState } from "react";
import axios from "axios";
import "./styles.css";

function AddMember() {
  const [data, setData] = useState({
    name: "",
    role: "",
    email: ""
  });

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("role", data.role);
    formData.append("email", data.email);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/members", formData);

      // ✅ SUCCESS ALERT
      alert("Member Added Successfully");

      // ✅ RESET FORM AFTER SUBMIT
      setData({
        name: "",
        role: "",
        email: ""
      });
      setImage(null);

    } catch (err) {
      console.log(err);
      alert("Error adding member");
    }
  };

  return (
    <div className="container">
      <h1 className="title">➕ Add Member</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        /><br /><br />

        <input
          placeholder="Role"
          value={data.role}
          onChange={(e) => setData({ ...data, role: e.target.value })}
        /><br /><br />

        <input
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        /><br /><br />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        /><br /><br />

        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default AddMember;