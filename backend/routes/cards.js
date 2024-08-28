import express from "express";
import Card from "../models/cardModel.js";

const router = express.Router();

// Create a new card
router.post("/cards", async (req, res) => {
  const { id, title, description } = req.body;
  try {
    const newCard = new Card({ id, title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all cards
router.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific card by title
router.get("/cards/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
