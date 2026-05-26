import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {

  // const bookCount = await prisma.book.count();
  // console.log(`Seeded authors and ${bookCount} books. First author id: ${ada.id}`);
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
