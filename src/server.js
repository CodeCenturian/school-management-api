import app from "./app.js";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);


  setInterval(() => {
    fetch(`https://school-management-api-ndqu.onrender.com/`)
      .then(() => console.log("Self-ping successful"))
      .catch(err => console.error("Self-ping failed:", err.message));
  }, 13 * 60 * 1000);
});
