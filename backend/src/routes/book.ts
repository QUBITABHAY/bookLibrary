import prisma from "../db/db.config.js";
import { Request, Response } from "express";

export const createBook = async (req: Request, res: Response) => {
  const { title, authorID, genreID, summary, isbn } = req.body;

  if (!title || !authorID || !genreID || !summary || !isbn) {
    res.send("All feids required");
  }

  await prisma.book.create({
    data: {
      title: title,
      authorID: authorID,
      genreID: genreID,
      summary: summary,
      ISBN: isbn,
    },
  });

  res.send("Data created successfully");
};
