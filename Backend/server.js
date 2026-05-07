const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

console.log("Starting server...");

mongoose.connect("mongodb://127.0.0.1:27017/teamDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* Storage for images */
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

/* Schema */
const MemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  image: String
});

const Member = mongoose.model("Member", MemberSchema);

/* Routes */

// POST - Add Member
app.post("/members", upload.single("image"), async (req, res) => {
  const newMember = new Member({
    name: req.body.name,
    role: req.body.role,
    email: req.body.email,
    image: req.file.filename
  });

  await newMember.save();
  res.json(newMember);
});

// GET all members
app.get("/members", async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// GET member by ID
app.get("/members/:id", async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

app.listen(5000, () => console.log("Server running on 5000"));