import express from "express";
import Transaction from "../models/transaction.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;