import Image from "next/image";
import Link from "next/link";

const BookCardComponent = ({ id, title, author, image }: BookObject) => {
  return (
    <div className="" key={id}>
      <Link
        href={`/selected-book/${id}`}
        className="flex flex-col items-center"
      > 
        <Image
          className=" object-cover transition-all duration-500 hover:shadow-2xl hover:shadow-mauve-500 hover:scale-105"
          src={image}
          alt={title}
          width={200}
          height={300}
          sizes="100vw"
          // style={{ height: "40px", width: "auto" }}
        />
        <h3 className="text-xl font-semibold pt-4 ">{title}</h3>
        <p>{author}</p>
      </Link>
    </div>
  );
};

export default BookCardComponent;
