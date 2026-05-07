# 🚀 Team Management Application

A full-stack web application to manage team members efficiently. Users can add members with images, view all members, and see detailed information for each individual.

---

## 📌 Features

* ➕ Add new team members (with image upload)
* 👥 View all team members in a clean card layout
* 🔍 View detailed information of each member
* 🖼️ Image upload and display
* 🌐 REST API integration
* 🎨 Modern UI with responsive design

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* React Router DOM
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer (for image upload)

---

## 📂 Project Structure

Team-Management/
│
├── backend/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

git clone https://github.com/YOUR-USERNAME/Team-Management.git
cd Team-Management

---

### 🔹 2. Backend Setup

cd backend
npm install
node server.js

Backend runs on:
http://localhost:5000

---

### 🔹 3. Frontend Setup

Open new terminal:

cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

---

## 🔗 API Endpoints

GET /members → Get all members
GET /members/:id → Get single member details
POST /members → Add a new member

---

## 📸 Application Flow

1. Open Home Page
2. Add a new member using form
3. View members list
4. Click "View Details" for more info

---

## 🎯 Output Highlights

* Dynamic data rendering from MongoDB
* Image storage and retrieval
* Responsive UI with navigation
* Clean component-based structure

---

## 📌 Note

Make sure MongoDB is running locally before starting the backend.
