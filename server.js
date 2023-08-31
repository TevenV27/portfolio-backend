import express, { json } from 'express';
import dotenv from 'dotenv';
import { connect } from './src/utils/db.js';
import projectRoutes from './src/routes/projectRoutes.js';
import aboutRoutes from './src/routes/aboutRoutes.js';
import educationRoutes from './src/routes/educationRoutes.js';
import technologyRoutes from './src/routes/technologyRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import experienceRoutes from './src/routes/experienceRoutes.js';
import authMiddleware from  './src/middlewares/authMiddleware.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.json());

// Conectar a la base de datos
connect();

app.get('/', (req, res) => {
  res.json({ message: "API Teven Portfolio" });
});

app.use('/api/login', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/technology', technologyRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
