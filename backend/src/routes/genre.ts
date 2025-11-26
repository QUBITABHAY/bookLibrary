import prisma from "../db/db.config";
import { Request, Response } from "express";

export const createGenre = async (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    res.send("Feilds is required");
  }

  const alreadyExists = await prisma.genre.findFirst({
    where: {
      name: name,
    },
  });

  if (alreadyExists) {
    res.send("Already Exists");
  }

  await prisma.genre.create({
    data: {
      name: name,
    },
  });

  res.send("Successfully Created");
};
