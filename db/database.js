const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),  // Aqui pode forçar para Number
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

pool.connect()
  .then(() => console.log('📦 Conectado ao PostgreSQL com sucesso!'))
  .catch((err) => console.error('❌ Erro ao conectar no PostgreSQL:', err));

module.exports = pool;
