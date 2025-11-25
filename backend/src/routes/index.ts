import { Router } from "express";
import { createAuthor } from "./author.js";

const routes = Router();

routes.post("/author", createAuthor);
