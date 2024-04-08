import express from "express";
import { createBook } from "./bookController";

const bookRouter = express.Router();

// routes
// /api/books
bookRouter.post("/", createBook);

export default bookRouter;
