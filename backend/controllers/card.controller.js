import Card from "../models/cardModel.js";
import { errorHandler } from "../utils/error.js";

// Create a new card
export const createCards = async (req, res, next) => {
  const { id, title, description } = req.body;
  if (!id) {
    return next(errorHandler(400, "Card ID is required"));
  }
  if (!title) {
    return next(errorHandler(400, "Card title is required"));
  }
  if (!description) {
    return next(errorHandler(400, "Card description is required"));
  }

  try {
    // Generate the link dynamically based on the card's title
    const link = `/cards/${encodeURIComponent(title)}`;
    const newCard = new Card({ id, title, description, link });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
};

// Get all cards
export const cardList = async (req, res, next) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    next(errorHandler(500, "An error occurred while fetching the card list"));
  }
};

// Get a specific card by title
export const cardTitle = async (req, res, next) => {
  const { title } = req.params;

  try {
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    next(errorHandler(500, "An error occurred while fetching the card"));
  }
};
