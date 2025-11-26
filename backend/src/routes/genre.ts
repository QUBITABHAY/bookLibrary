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

export const getGenre = async (req: Request, res: Response) => {
  const data = await prisma.genre.findMany();

  res.json(data);
};

export const deleteGenre = async (req: Request, res: Response) => {
  const { id, name } = req.body;

  const get = await prisma.genre.findUnique({
    where: {
      id: id,
      name: name,
    },
  });

  if (!get) {
    res.send("This not exist");
  }

  await prisma.genre.delete({
    where: {
      id: id,
    },
  });
};
