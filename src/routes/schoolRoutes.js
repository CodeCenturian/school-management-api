import express from "express";
import { createSchool, listSchools } from "../controllers/schoolController.js";

const router = express.Router();

router.post("/addSchool", createSchool);
router.get("/listSchools", listSchools);

export default router;
