// service/userService.js
const db = require('../db/database');

async function getAllUsers() {
  // Pega todos os usuários do banco
  const result = await db.query('SELECT * FROM users');
  return result.rows;
}

async function getUserById(id) {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0]; // retorna o usuário ou undefined
}

async function createUser(name, email, age) {
  const result = await db.query(
    'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
    [name, email, age]
  );
  return result.rows[0]; // retorna o usuário criado
}

async function updateUser(id, name, email, age) {
  const result = await db.query(
    'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
    [name, email, age, id]
  );
  return result.rows[0]; // retorna o usuário atualizado ou undefined se não existir
}

async function deleteUser(id) {
  await db.query('DELETE FROM users WHERE id = $1', [id]);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
