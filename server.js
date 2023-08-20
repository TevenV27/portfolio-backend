import express from 'express';
import dotenv from 'dotenv';
import { connect } from './src/utils/db.js';
import projectRoutes from './src/routes/projectRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

// Conectar a la base de datos
connect();

// Rutas para proyectos
app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
