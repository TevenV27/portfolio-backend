import express from 'express';
import { addExperience, getExperience, updateExperience, delExperience} from '../controllers/experienceController.js';
import authMiddleware from  '../middlewares/authMiddleware.js';
const router = express.Router();

router.get('/', getExperience);
router.post('/',authMiddleware, addExperience);
router.put('/:id',authMiddleware, updateExperience);
router.delete('/:id',authMiddleware, delExperience);


export default router;