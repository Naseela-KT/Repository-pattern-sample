const AuthService = require('../services/auth.service');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await AuthService.register(username, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await AuthService.login(username, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};