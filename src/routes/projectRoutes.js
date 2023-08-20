import express from 'express';
import { getAllProjects, addProject, delProjectById, updateProjectById } from '../controllers/projectController.js';

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', addProject);
router.put('/:id', updateProjectById);
router.delete('/:id', delProjectById);

export default router;
