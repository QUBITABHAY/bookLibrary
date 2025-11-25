import { Router } from "express";
import { createAuthor } from "./author.js";
import { createBook } from "./book.js";

const routes = Router();

routes.post("/author", createAuthor);
routes.post("/book", createBook);
