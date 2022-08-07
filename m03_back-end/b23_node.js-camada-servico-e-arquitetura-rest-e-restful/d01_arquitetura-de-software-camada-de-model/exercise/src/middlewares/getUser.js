const rescue = require('express-rescue');
const userModel = require('../models/userModel');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;

  const user = await userModel.getUser(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.status(200).json(user);
});