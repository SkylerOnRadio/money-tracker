import { Router } from "express";
import { upload } from "../middleware/multer.js";
import { getUserData, postUserData } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", getUserData);
userRouter.post("/", upload.single("avatar"), postUserData);

export default userRouter;
