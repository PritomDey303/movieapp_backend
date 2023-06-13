const express = require("express");
const { createComment, getAllComments } = require("../controllers/comment");
const checkLogin = require("../middlewares/checkLogin");
const router = express.Router();

//create comment route
router.post("/create", checkLogin, createComment);
//get all comments route
router.get("/allcomments/:id", checkLogin, getAllComments);

module.exports = router;
