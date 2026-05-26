import Image from "next/image";

const BookCardComponent = ({ id, title, author, image }: BookObject) => {
  return (
    <div className="" key={id}>
      <Image
        className=" object-cover transition-all duration-500 hover:shadow-2xl hover:shadow-mauve-500 hover:scale-105"
        src={image}
        alt={title}
        width={200}
        height={300}
      />
      <h3 className="text-xl font-semibold pt-4 ">{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default BookCardComponent;
