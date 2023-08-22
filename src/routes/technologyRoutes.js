import  express  from "express";
import { getTechnology, addTechnology, updateTechnology, delTechnology } from "../controllers/technologyController.js";

const router = express.Router();

router.get("/", getTechnology);
router.post("/", addTechnology);
router.put("/:id", updateTechnology);
router.delete("/:id", delTechnology);

export default router;