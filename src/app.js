import express from "express";
import schoolRoutes from "./routes/schoolRoutes.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api/schools", schoolRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("School Management API is running.");
});

export default app;
