const router = require("express").Router();
const userControllers = require("../controllers/userController");

router.post("/signup", userControllers.signUp);
router.post("/login", userControllers.login);
module.exports = router;
