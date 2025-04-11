const userModel = require("../models/userSchema");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Check if user already exists
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await userModel.create({
      name,
      email,
      password,
      role,
    });

    await user.save();

    delete user.password;

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    if (user.password !== password) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const { password: _, ...userData } = user._doc;
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: userData,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
