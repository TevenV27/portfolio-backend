import  express  from "express";
import { getTechnology, addTechnology, updateTechnology, delTechnology } from "../controllers/technologyController.js";
import authMiddleware from  '../middlewares/authMiddleware.js';

const router = express.Router();

router.get("/", getTechnology);
router.post("/",authMiddleware, addTechnology);
router.put("/:id",authMiddleware, updateTechnology);
router.delete("/:id",authMiddleware, delTechnology);

export default router;