import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { ArtistInput } from '../types/index';

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
  const { name, albums, concerts } = req.body as ArtistInput;

  try {
    const newArtist = await prisma.artist.create({
      data: {
        name,
        albums: albums
          ? {
              create: albums.map((album) => ({
                title: album.title,
                tracks: album.tracks
                  ? {
                      create: album.tracks.map((track) => ({
                        title: track.title,
                      })),
                    }
                  : undefined,
              })),
            }
          : undefined,
        concerts: concerts
          ? { connect: concerts.map((concert) => ({ id: concert.id })) }
          : undefined,
      },
    });

    res.json(newArtist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const getArtistById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const artist = await prisma.artist.findUnique({
      where: { id: Number(id) },
      include: {
        albums: {
          include: {
            tracks: true,
          },
        },
        concerts: true,
      },
    });

    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }

    res.json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const updateArtist = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, albums, concerts } = req.body as ArtistInput;

  try {
    const updatedArtist = await prisma.artist.update({
      where: { id: Number(id) },
      data: {
        name,
        albums: albums
          ? {
              create: albums.map((album) => ({
                title: album.title,
                tracks: album.tracks
                  ? {
                      create: album.tracks.map((track) => ({
                        title: track.title,
                      })),
                    }
                  : undefined,
              })),
            }
          : undefined,
        concerts: concerts
          ? { connect: concerts.map((concert) => ({ id: concert.id })) }
          : undefined,
      },
    });

    res.json(updatedArtist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const deleteArtist = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.artist.delete({
      where: { id: Number(id) },
    });

    res.json({ message: 'Artist deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
