const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema(
  {
    movie: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    rating: {
      type: Number,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating;
