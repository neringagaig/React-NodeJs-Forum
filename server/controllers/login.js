const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");
const { jwtSecret } = require("../utils/config");

loginRouter.post("/", async (request, response) => {
  const body = request.body;

  const user = await User.findOne({ username: body.username });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(body.password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    username: user.username,
    name: user.name,
    dateOfBirth: user.dateOfBirth,
    id: user._id,
    avatar: user.avatar,
    email: user.email,
    resetLink: user.resetLink
  };

  const token = jwt.sign(userForToken, jwtSecret);

  response.status(200)
  .send({ token, username: user.username, name: user.name, avatar: user.avatar, dateOfBirth: user.dateOfBirth, email: user.email, id: user._id, resetLink: user.resetLink })

});

module.exports = loginRouter;
