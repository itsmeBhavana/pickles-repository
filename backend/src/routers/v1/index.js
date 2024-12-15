import express from "express";
import {
  getPickles,
  createPickle,
  getPickle,
} from "../../controllers/pickleController.js";

const router = express.Router();

router.post("/pickle", createPickle);
router.get("/pickles", getPickles);
router.get("/pickles/:id", getPickle);

export default router;
