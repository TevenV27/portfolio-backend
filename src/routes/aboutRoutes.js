import express from 'express';
import { getAbout, addAbout, updateAbout, delAbout } from '../controllers/aboutController.js';
import authMiddleware from  '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAbout);
router.post('/',authMiddleware, addAbout);
router.put('/:id',authMiddleware, updateAbout);
router.delete('/:id',authMiddleware, delAbout);

export default router;