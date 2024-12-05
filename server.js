const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Save data to JSON file
app.post("/save-data", (req, res) => {
  const data = req.body;

  // Generate a unique ID
  const id = Date.now();

  // Read existing data
  const filePath = path.join(__dirname, "src", "PersonalData", "data.json");
  let existingData = [];
  if (fs.existsSync(filePath)) {
    const rawData = fs.readFileSync(filePath);
    existingData = JSON.parse(rawData);
  }

  // Add new data with ID
  existingData.push({ id, ...data });

  // Save updated data back to the file
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

  res.status(200).send({ message: "Data saved successfully", id });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
