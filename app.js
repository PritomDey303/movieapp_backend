const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database/database");
const port = process.env.PORT || 5000;

dotenv.config();

//cors middleware allowing all requests
// Middleware to handle CORS headers
app.use(cors());
//json body parser middleware
app.use(express.json());

// Connect to MongoDB
connectDB(process.env.MONGO_URI, process.env.DB_NAME);
//parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cors middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
//Routing Middleware
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/comment", require("./routes/commentRoute"));
app.use("/api/rating", require("./routes/ratingRoute"));
app.use("/api/like", require("./routes/likeRoute"));
app.use("/api/movie", require("./routes/movieRoute"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
