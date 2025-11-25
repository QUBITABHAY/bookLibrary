import { Router } from "express";
import { createAuthor } from "./author";
import { createBook } from "./book";
import { createGenre } from "./genre";

const routes = Router();

routes.post("/author", createAuthor);
routes.post("/book", createBook);
routes.post("/genre", createGenre);

export default routes;
