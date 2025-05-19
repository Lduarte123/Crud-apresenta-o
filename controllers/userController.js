const userService = require('../service/userService');

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || typeof age !== 'number') {
      return res.status(400).json({ message: 'Dados inválidos' });
    }
    const newUser = await userService.createUser(name, email, age);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || typeof age !== 'number') {
      return res.status(400).json({ message: 'Dados inválidos' });
    }
    const updatedUser = await userService.updateUser(req.params.id, name, email, age);
    if (!updatedUser) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleted = await userService.deleteUser(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
