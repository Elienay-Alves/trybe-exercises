const rescue = require('express-rescue');
const userModel = require('../models/userModel');

module.exports = rescue(async (_req, res) => {
  const allUsers = await userModel.listUsers();
  res.status(200).json(allUsers);
});