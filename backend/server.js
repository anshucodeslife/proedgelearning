import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

app.post("/api/students", async (req, res) => {
  try {
    const data = req.body;

    const query = `
      INSERT INTO students (
        full_name, dob, gender, contact, email, address,
        education_level, school, board, subjects,
        preferred_courses, other_course, batch_timing,
        emergency_name, emergency_relation, emergency_phone
      ) 
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
    `;

    const values = [
      data.fullName, data.dob, data.gender, data.contact, data.email,
      data.address, data.educationLevel, data.school, data.board,
      data.subjects, data.preferredCourses, data.otherCourse,
      data.batchTiming, data.emergencyName, data.emergencyRelation,
      data.emergencyPhone
    ];

    await pool.query(query, values);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Database Error" });
  }
});

app.listen(8080, () => console.log("Backend running on port 8080"));
