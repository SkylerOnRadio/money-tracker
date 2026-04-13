import { Router } from "express";
import { postTransactions } from "../controllers/transactionController.js";

const transactionRouter = Router();

// transactionRouter.get("/", getTransactions);
transactionRouter.post("/", postTransactions);
// transactionRouter.put("/", updateTransaction);
// transactionRouter.delete("/", deleteTransaction);

export default transactionRouter;
