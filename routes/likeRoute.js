const express = require("express");
const { createLike, checkLike } = require("../controllers/like");
const checkLogin = require("../middlewares/checkLogin");
const router = express.Router();

//create like
router.post("/create", checkLogin, createLike);

//get like
router.get("/check/:id", checkLogin, checkLike);

module.exports = router;
