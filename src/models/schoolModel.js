import pool from "../config/db.js";

export async function addSchool(name, address, latitude, longitude) {

  const [result] = await pool.query(
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
    [name, address, latitude, longitude]

  );
  return result.insnertId;
}

export async function getAllSchools() {
  const [rows] = await pool.query("SELECT * FROM schools");
  return rows;
}


export const findSchoolByCoordinates = async (latitude, longitude) => {
  const [rows] = await pool.query(
    "SELECT * FROM schools WHERE latitude = ? AND longitude = ? LIMIT 1",
    [latitude, longitude]
  );
  return rows.length > 0 ? rows[0] : null;
};

