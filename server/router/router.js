import express from "express";
import {
  getCollections,
  getCollectionsWithId,
  createCollections,
  deleteCollection,
  updateCollection,
} from "../controllers/collections.js";
const router = express.Router();
router.get("/collections", getCollections);
router.get("/collections/:id", getCollectionsWithId);

router.post("/collections", createCollections);
router.delete("/collections/:id", deleteCollection);
router.put("/collections/:id", updateCollection);
export default router;
