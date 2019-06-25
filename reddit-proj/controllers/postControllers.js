const Post = require("../models/Post");

exports.getPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.status(200).json({
        posts
      });
    })
    .catch(err => {
      res.status(400).json({ message: "creation failed" });
      console.log(err);
    });
};

exports.createPost = (req, res, next) => {
  const {
    category,
    body,
    postedAt,
    votes,
    imageUrl,
    user,
    comments
  } = req.body;
  console.log(req.body);
  Post.create({
    category,
    body,
    postedAt,
    votes,
    imageUrl,
    user
  })
    .then(post => {
      res.status(200).json({ message: "created successfuly" });
    })
    .catch(err => {
      res.status(400).json({ message: "creation failed" });
      console.log(err);
    });
};
