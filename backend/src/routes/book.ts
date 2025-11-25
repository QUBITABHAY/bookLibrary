import prisma from "../db/db.config";
import { Request, Response } from "express";

export const createBook = async (req: Request, res: Response) => {
  const { title, authorID, genreID, summary, isbn } = req.body;

  if (!title || !authorID || !genreID || !summary || !isbn) {
    res.send("All feids required");
  }

  await prisma.book.create({
    data: {
      title: title,
      authorId: authorID,
      genreId: genreID,
      summary: summary,
      ISBN: isbn,
    },
  });

  res.send("Data created successfully");
};
