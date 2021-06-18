const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// register user by passing username, email, and hashing the password
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if ((!username, !email, !password)) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashed,
    });

    const user = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (user) {
      return res.status(409).send("username or email already taken");
    }

    newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

// use email or username with password to login
const login = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({
    $or: [{ username: username }, { email: email }],
  });
  if (!user) {
    return res.status(400).json({ msg: "Incorrect account or password" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ msg: "Incorrect account or password" });
  }

  const payload = { id: user._id, username: user.username };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.status(200).json({
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};

//getUsers function to get all users
const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

//getUserById function to retrieve user by id
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  //if user id match param id send user else throw error
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
    res.status(404);
    throw new Error("User not found");
  }
};

module.exports = {
  register,
  login,
  getUsers,
  getUserById,
};
