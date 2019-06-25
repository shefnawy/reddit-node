const router = require("express").Router();
const postControllers = require("../controllers/postControllers");

router.get("/posts", postControllers.getPosts);
router.post("/post", postControllers.createPost);
module.exports = router;
