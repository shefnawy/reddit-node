const Post = require("../models/Post");

exports.addComment = (req, res, next) => {
  let newComment = req.body.body;
  Post.updateOne(
    { _id: req.body.id },
    { $push: { comments: { body: newComment } } }
  ).then(post => {
    res.json(post);
  });
};

exports.addVotes = (req, res, next) => {
  Post.updateOne({ _id: req.body.id }, { $inc: { votes: 1 } }).then(post => {
    res.json(post);
  });
};

exports.downVotes = (req, res, next) => {
  Post.updateOne({ _id: req.body.id }, { $inc: { votes: -1 } }).then(post => {
    res.json(post);
  });
};

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
    comments,
    username
  } = req.body;
  console.log(req.body);
  Post.create({
    category,
    body,
    postedAt,
    votes,
    imageUrl,
    user,
    username
  })
    .then(post => {
      res.status(200).json({ message: "created successfuly" });
    })
    .catch(err => {
      res.status(400).json({ message: "creation failed" });
      console.log(err);
    });
};
