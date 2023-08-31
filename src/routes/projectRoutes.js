import express from 'express';
import { getAllProjects, addProject, delProjectById, updateProjectById } from '../controllers/projectController.js';
import authMiddleware from  '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAllProjects);
router.post('/',authMiddleware, addProject);
router.put('/:id',authMiddleware, updateProjectById);
router.delete('/:id',authMiddleware, delProjectById);

export default router;
