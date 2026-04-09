import { Router } from "express";
import { upload } from "../middleware/multer.js";
import {
	getUserData,
	postUserData,
	updateUserData,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", getUserData);
userRouter.post("/", upload.single("avatar"), postUserData);
userRouter.put("/", upload.single("avatar"), updateUserData);

export default userRouter;
