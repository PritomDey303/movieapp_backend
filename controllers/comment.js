const Comment = require("../database/schema/commentSchema");

//create comment
exports.createComment = async (req, res) => {
  try {
    const comment = new Comment({
      comment: req.body.comment,
      user: req.user._id,
      movie: req.body.movie,
    });
    await comment.save();
    res.json({
      status: "success",
      message: "Comment created successfully.",
      data: comment,
    });
  } catch (error) {
    res.json({
      status: "error",
      location: "createComment",
      error: "Sorry! Something went wrong.",
    });
  }
};

//get all comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      movie: req.params.id,
    })
      .populate("user", "name")
      .sort({
        createdAt: -1,
      });
    res.json({
      status: "success",
      message: "Comments fetched successfully.",
      data: comments,
    });
  } catch (error) {
    res.json({
      status: "error",
      location: "getAllComments",
      error: "Sorry! Something went wrong.",
    });
  }
};
