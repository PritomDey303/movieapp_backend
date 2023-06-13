const express = require("express");
const { movieData } = require("../controllers/movie");
const router = express.Router();

//get all moviedata
router.get("/:id", movieData);
module.exports = router;
