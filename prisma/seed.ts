import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create some artists
  const artist1 = await prisma.artist.create({
    data: {
      name: 'Artist 1',
    },
  });
  const artist2 = await prisma.artist.create({
    data: {
      name: 'Artist 2',
    },
  });

  // Create some albums for each artist
  await prisma.album.create({
    data: {
      title: 'Album 1',
      artistId: artist1.id,
    },
  });
  await prisma.album.create({
    data: {
      title: 'Album 2',
      artistId: artist2.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
