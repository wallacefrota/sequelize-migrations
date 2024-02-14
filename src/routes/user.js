import { Router } from "express";
const routes = Router();

import {
  getUser,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

// routes user
routes.get("/", getAllUsers);
routes.get("/:id", getUser);
routes.post("/", addUser);
routes.put("/:id", updateUser);
routes.delete("/:id", deleteUser);

export default routes;