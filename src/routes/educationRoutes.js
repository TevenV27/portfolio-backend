import express from 'express';
import { addEducation, getEducation, updateEducation, delEducation } from '../controllers/educationController.js';
import authMiddleware from  '../middlewares/authMiddleware.js';
const router = express.Router();

router.get('/', getEducation);
router.post('/',authMiddleware, addEducation);
router.put('/:id',authMiddleware, updateEducation);
router.delete('/:id',authMiddleware, delEducation);

export default router;