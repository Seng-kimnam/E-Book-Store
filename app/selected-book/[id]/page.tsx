import Flipbook from "@/components/FlipBook";
import { bookList } from "@/data/book";

interface PageProps {
  params: Promise<{ id: string }>;
}

const SelectedBookPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const getBookDataById = bookList.find((book) => book.id === parseInt(id));


  const { url, title } = getBookDataById || {};
  return (
    <>
      <Flipbook title={title} url={url} />
    </>
  );
};

export default SelectedBookPage;
