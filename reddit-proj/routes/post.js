const router = require("express").Router();
const postControllers = require("../controllers/postControllers");

router.get("/posts", postControllers.getPosts);
router.post("/post", postControllers.createPost);
router.post("/comment", postControllers.addComment);
router.post("/upvote", postControllers.addVotes);
router.post("/downvote", postControllers.downVotes);
module.exports = router;
