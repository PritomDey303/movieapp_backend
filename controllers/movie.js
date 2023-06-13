const Comment = require("../database/schema/commentSchema");
const Like = require("../database/schema/likeSchema");
const Rating = require("../database/schema/ratingSchema");

async function movieData(req, res) {
  try {
    //get all comments
    const comments = await Comment.find({
      movie: req.params.id,
    })
      .populate("user", "name")
      .sort({
        createdAt: -1,
      });
    //get all likes
    const likes = await Like.find({
      movie: req.params.id,
    });
    const likeCount = likes.length;
    //get all ratings
    const ratings = await Rating.find({
      movie: req.params.id,
    });
    const averageRating =
      ratings.reduce((acc, item) => {
        return acc + item.rating;
      }, 0) / ratings.length;

    res.json({
      status: "success",
      message: "Movie data fetched successfully.",
      data: {
        comments,
        likeCount,
        averageRating,
      },
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "Sorry! Something went wrong.",
    });
  }
}

module.exports = {
  movieData,
};
