import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  const ada = await prisma.author.upsert({
    where: { email: "ada@example.com" },
    update: {},
    create: {
      email: "ada@example.com",
      name: "Ada Lovelace",
      books: {
        create: [
          {
            title: "Notes on the Analytical Engine",
            description: "A starter record for testing Prisma relations.",
          },
          {
            title: "Letters on Computation",
            description: "Sample seed data for the e-book app.",
          },
        ],
      },
    },
  });

  await prisma.author.upsert({
    where: { email: "grace@example.com" },
    update: {},
    create: {
      email: "grace@example.com",
      name: "Grace Hopper",
      books: {
        create: {
          title: "Compiler Notes",
          description: "Another seeded book row.",
        },
      },
    },
  });

  const bookCount = await prisma.book.count();
  console.log(`Seeded authors and ${bookCount} books. First author id: ${ada.id}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
