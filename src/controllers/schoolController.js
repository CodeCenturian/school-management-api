import { addSchool, getAllSchools, findSchoolByCoordinates } from "../models/schoolModel.js";
import { calculateDistance } from "../utils/calculateDistance.js";

export const createSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ error: "Invalid or missing fields" });
    }

    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    // Check if school already exists at same coordinates
    const existingSchool = await findSchoolByCoordinates(lat, lon);
    if (existingSchool) {
      return res.status(409).json({
        error: `A school already exists at these coordinates: ${existingSchool.name}`
      });
    }

    const schoolId = await addSchool(name, address, lat, lon);
    res.status(201).json({
      message: "School added successfully",
      schoolId
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ error: "Latitude and longitude must be numbers" });
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const schools = await getAllSchools();
    const sorted = schools
      .map((school) => ({
        ...school,
        distance: calculateDistance(userLat, userLon, school.latitude, school.longitude)
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
