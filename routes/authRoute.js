const express = require("express");
const { signup, signin, keepUserLoggedIn } = require("../controllers/auth");
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();

//signup route
router.post("/signup", signup);
//login route
router.post("/signin", signin);

router.get("/keeplogin", checkLogin, keepUserLoggedIn);
module.exports = router;
