# 🏫 School Management API

A modern **Node.js + Express** REST API for managing schools and their geolocation data.
It supports adding new schools, listing schools sorted by distance from given coordinates, and preventing duplicate entries — all while maintaining a clean, scalable architecture.

---

## 🚀 Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
</p>

---

## 🌐 Live API

**Base URL:** [https://school-management-api-ndqu.onrender.com](https://school-management-api-ndqu.onrender.com)

---

## 📚 API Reference

| Action               | Method | Endpoint                                                  | Description                                   |
| -------------------- | ------ | --------------------------------------------------------- | --------------------------------------------- |
| **Check API Status** | GET    | `/`                                                       | Returns `"School Management API is running."` |
| **Add School**       | POST   | `/api/schools/addSchool`                                  | Adds a new school with coordinates            |
| **List Schools**     | GET    | `/api/schools/listSchools?latitude=28.61&longitude=77.20` | Returns schools sorted by distance            |

### Example — Add a School

```http
POST /api/schools/addSchool
Content-Type: application/json

{
  "name": "ABC Public School",
  "address": "123 Main Street",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

**Response**

```json
{
  "message": "School added successfully"
}
```

### Example — List Schools by Distance

```http
GET /api/schools/listSchools?latitude=28.61&longitude=77.20
```

**Response**

```json
[
  {
    "id": 1,
    "name": "ABC Public School",
    "address": "123 Main Street",
    "latitude": 28.6139,
    "longitude": 77.2090,
    "distance": 0.45
  }
]
```

---

## 🛠 Local Setup

### Prerequisites

* **Node.js** v16+
* **MySQL** 8.0+

### Installation

```bash
git clone https://github.com/yourusername/school-management-api.git
cd school-management-api
npm install
```

### Database Setup

1. Create a MySQL database:

```sql
CREATE DATABASE school_db;
```

2. Create the `schools` table:

```sql
CREATE TABLE schools (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  address VARCHAR(255),
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8)
);
```

3. Create a `.env` file in the root directory:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=school_db
DB_PORT=3306
```

### Run the Server

```bash
npm run dev   # Development mode
npm start     # Production mode
```

---

## 📂 Project Structure

```
src/
├── controllers/        # schoolController.js — Handles requests & responses
├── models/             # schoolModel.js — MySQL queries
├── routes/             # schoolRoutes.js — API routes
├── utils/              # calculateDistance.js — Haversine formula logic
├── config/             # db.js — Database connection
├── app.js              # Express configuration
└── server.js           # Entry point
```

---

## 🌟 Features

✅ Add schools with geocoordinates
✅ List schools sorted by proximity to a given location
✅ Prevent duplicate entries based on coordinates
✅ MySQL integration for reliability & scalability
✅ Easily deployable to Render or Heroku

---

## 📌 Deployment

* Push code to GitHub
* Connect your repository to **Render** or **Heroku**
* Add environment variables from `.env`
* Deploy and your API is live 🚀

---

**Built with ❤️ using Node.js, Express, and MySQL**
