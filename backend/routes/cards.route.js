import express from "express";
import {
  createCards,
  cardList,
  cardTitle,
} from "../controllers/card.controller.js";

const router = express.Router();

router.post("/create", createCards);
router.get("/listings", cardList);
router.get("/:title", cardTitle);

export default router;
