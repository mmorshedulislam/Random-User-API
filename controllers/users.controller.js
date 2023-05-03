let users = require("../views/users");

module.exports.getRandomUser = (req, res) => {};

module.exports.getUsers = (req, res) => {
  res.status(200).json({
    message: "success",
    data: users,
  });
};

module.exports.saveUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(200).json({
    message: "inserted new user",
    data: user,
  });
};

module.exports.updateUser = (req, res) => {};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== Number(id));
  res.status(200).json({
    message: "success",
    data: users,
  });
};

module.exports.updateMultUser = (req, res) => {};
