import prisma from "../db/db.config";
import { Request, Response } from "express";

export const createAuthor = async (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    res.send("Feids are required");
  }

  await prisma.author.create({
    data: {
      name: name,
    },
  });
};
