import { Router } from "express";
const routes = Router();

import {
  addPost,
  deletePost,
  getAllPostByUser,
  getPost,
  updatePost,
} from "../controllers/PostController.js";

routes.post("/", addPost);
routes.get("/all/:id", getPost);
routes.get('/all', getAllPostByUser);
routes.put("/:id", updatePost);
routes.delete("/:id", deletePost);

export default routes;