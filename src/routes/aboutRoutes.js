import express from 'express';
import { getAbout, addAbout, updateAbout, delAbout } from '../controllers/aboutController.js';

const router = express.Router();

router.get('/', getAbout);
router.post('/', addAbout);
router.put('/:id', updateAbout);
router.delete('/:id', delAbout);

export default router;