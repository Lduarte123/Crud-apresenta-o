const express = require('express');
const setupSwagger = require('./swagger/swaggerConfig');
const app = express();

const PORT = process.env.PORT || 3000; // 🔧 Defina a variável PORT antes de usá-la

app.use(express.json());

// Swagger
setupSwagger(app);

// Rotas
app.use('/api', require('./routes/userRoutes'));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger: http://localhost:${PORT}/api-docs`);
});
