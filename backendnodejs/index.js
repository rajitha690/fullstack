const courses = require("./routes/courses");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

// Establish MongoDB connection
connection().catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
  process.exit(1);
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('Backend is healthy');
});

app.use(express.json());
app.use(cors());
app.use("/courses", courses);

const port = process.env.PORT || 3100;

app.listen(port, '0.0.0.0', () => {
  console.log(`Our backend API is listening via port ${port}`);
});
