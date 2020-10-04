var mongoose = require("mongoose");

// SCHEME SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  imageId: String,
  description: String,
  tags: [],

  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  rateAvg: Number,
  rateCount: Number,
  hasRated: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

module.exports = mongoose.model("Campground", campgroundSchema);
