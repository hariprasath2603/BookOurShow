const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controller/userControllers");
const { validateJWTToken } = require("../middleware/authorizationMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/currentUser", validateJWTToken, getCurrentUser);

module.exports = router;
