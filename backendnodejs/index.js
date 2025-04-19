const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db");
const courses = require("./routes/courses");

// Connect to MongoDB
connection().catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
  process.exit(1);
});

// Enable CORS with preflight handling
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.options('*', cors());

app.use(express.json());

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Backend is healthy');
});

// Course Routes
app.use("/courses", courses);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Our backend API is listening via port ${port}`);
});
