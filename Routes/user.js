import express from "express";

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  editTodo,
} from "../Controller/user.js";

const router = express.Router();

//user get all item
router.get("/", getUsers);

//user create the new item
router.post("/", createUser);

//user get the specific item
router.get("/:id", getUser);

//user delete the item
router.delete("/:id", deleteUser);

router.put("/:id", editTodo);

export default router;
