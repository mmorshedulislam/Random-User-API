let users = require("../views/users");

module.exports.getRandomUser = (req, res) => {
  const random = Math.floor(Math.random() * 10);
  const user = users.find((user) => user.id == random);
  res.send({
    message: "success",
    data: user,
  });
};

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

module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedDoc = users.find((user) => user.id === Number(id));
  updatedDoc.contact = data.contact;

  res.status(200).json({
    message: "user updated",
    data: updatedDoc,
  });
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== Number(id));
  res.status(200).json({
    message: "success",
    data: users,
  });
};

module.exports.updateMultUser = (req, res) => {
  const updateUsers = req.body;

  const selectedUser = updateUsers
    .filter((obj1) => users.some((obj2) => obj1.id === obj2.id))
    .map((user) => {
      return { ...user, contact: user.contact };
    });
  res.send(selectedUser);
};
