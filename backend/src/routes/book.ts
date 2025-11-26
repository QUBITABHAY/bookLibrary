import prisma from "../db/db.config";
import { Request, Response } from "express";

export const createBook = async (req: Request, res: Response) => {
  const { title, authorID, genreID, summary, isbn } = req.body;

  if (!title || !authorID || !genreID || !summary || !isbn) {
    res.send("All feids required");
  }

  const alreadyExists = await prisma.book.find({
    where: {
      title: title,
    },
  });

  if (alreadyExists) {
    res.send("Already Exists");
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

export const updateBook = async (req: Request, res: Response) => {
  const { bookid, title, authorID, genreID, summary, isbn } = req.body;

  if (!title || !authorID || !genreID || !summary || !isbn) {
    res.send("All feids required");
  }

  const getBook = await prisma.book.findFirst({
    where: {
      title: title,
    },
  });

  if (!getBook) {
    res.send("This book not exists, create it");
  }

  await prisma.book.update({
    where: {
      id: bookid,
    },

    data: {
      title: title,
      authorId: authorID,
      genreId: genreID,
      summary: summary,
      ISBN: isbn,
    },
  });
};
