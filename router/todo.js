import express from "express";
import { createTodo, getAllTodos,  } from "../Controllers/todo.js";

const router = express.Router();

router.route("/createtodo").post(createTodo);
router.route("/gettodos").get(getAllTodos);



export default router;