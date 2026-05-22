import { prisma } from "@/lib/prisma";

const AuthorPage = async () => {
  const authors = await prisma.author.findMany();

  return (
    <>
      {authors.map((author) => (
        <div key={author.id} className="border-2 border-gray-950 rounded-lg">
          <h2 className="text-3xl font-bold ">{author.name}</h2>
          <p className="text-gray-600">{author.email}</p>
        </div>
      ))}
    </>
  );
};

export default AuthorPage;

