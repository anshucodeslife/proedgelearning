import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "https://proedgelearning.in",          // <-- your domain
  "https://www.proedgelearning.in"       // if www enabled
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow mobile apps, curl, etc.

    if (ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }

    console.log("❌ BLOCKED ORIGIN:", origin);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,           // allow cookies
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

// API Routes
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Backend API Running ✔");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
