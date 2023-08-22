import express from 'express';
import { addEducation, getEducation, updateEducation, delEducation } from '../controllers/educationController.js';

const router = express.Router();

router.get('/', getEducation);
router.post('/', addEducation);
router.put('/:id', updateEducation);
router.delete('/:id', delEducation);

export default router;