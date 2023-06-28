import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getArtists = async (req: Request, res: Response) => {
  try {
    const artists = await prisma.artist.findMany();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const createArtist = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const newArtist = await prisma.artist.create({
      data: {
        name: name,
      },
    });

    res.json(newArtist);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
