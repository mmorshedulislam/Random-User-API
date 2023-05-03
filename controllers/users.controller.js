let users = require("../views/users");

module.exports = users;

module.exports.getRandomUser = (req, res) => {};

module.exports.getUsers = (req, res) => {
  res.status(200).json({
    status: true,
    data: users,
  });
};

module.exports.saveUser = (req, res) => {};

module.exports.updateUser = (req, res) => {};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== Number(id));
  res.send({ users });
};

module.exports.updateMultUser = (req, res) => {};
