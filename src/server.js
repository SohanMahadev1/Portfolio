const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Define the path to the `data.json` file
const filePath = path.join(__dirname, "public", "PersonalData", "data.json");

// Ensure the `PersonalData` folder exists
const ensureDirectoryExistence = (filePath) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
};
ensureDirectoryExistence(filePath);

// Create an empty `data.json` file if it doesn't exist
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

// Route to handle saving data
app.post("/save-data", (req, res) => {
  try {
    const existingData = JSON.parse(fs.readFileSync(filePath, "utf8")); // Read existing data
    const newData = { id: Date.now(), ...req.body }; // Add a unique ID to the new data
    existingData.push(newData); // Append new data
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2)); // Write back to file
    res.status(200).json({ id: newData.id, message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

// Serve the public folder
app.use(express.static(path.join(__dirname, "public")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
