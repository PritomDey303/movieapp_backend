const express = require("express");
const { createRating, checkRating } = require("../controllers/rating");
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();

router.post("/create", checkLogin, createRating);
router.get("/getrating/:id", checkLogin, checkRating);

module.exports = router;
