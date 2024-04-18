// Load environment variables from .env file at the very beginning
require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");

// Ensure the MongoDB URI is loaded
if (!process.env.MONGO_URI) {
  console.error("FATAL ERROR: MONGO_URI is not defined.");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const dbconfig = require("./config/dbconfig"); // Assuming this is for additional db config
const portfolioRoutes = require("./routes/PortFolioRoute");

app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "front-end-part/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "front-end-part/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
