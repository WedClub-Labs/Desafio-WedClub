import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUniqueUser,
  postUser,
  updateUserInfo,
} from "./controllers/userController";

export const router = Router();

/**
 * POST   -> create a new user
 * GET    -> get a user or all of them
 * PUT    -> update a user
 * DELETE -> delete a user
 */

router
  .post("/user", postUser)
  .get("/user", getUniqueUser, getAllUsers)
  .put("/user", updateUserInfo)
  .delete("/user", deleteUser);
