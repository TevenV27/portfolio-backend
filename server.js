import express from 'express';
import dotenv from 'dotenv';
import { connect } from './src/utils/db.js';
import projectRoutes from './src/routes/projectRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.json());

// Conectar a la base de datos
await connect();

// Rutas para proyectos
app.use('/api/projects', projectRoutes);
app.use('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
