import express from "express";

import userRouter from "./routes/userRoutes.js";
import db from "./database/database.js";
import transactionRouter from "./routes/transactionRoutes.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/user/", userRouter);
app.use("/api/transactions/", transactionRouter);

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
