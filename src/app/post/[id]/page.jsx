import SinglePage from "../../../components/singlePage/singleProductHome/SinglePage";
import { supabase } from "../../../lib/supabaseClient";

export async function generateMetadata({ params }) {
  const { id } = await params;
  
  const { data: book } = await supabase
    .from('books')
    .select('title, description, image')
    .eq('id', id)
    .single();

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: `${book.title} | Bookshop`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [book.image],
    },
  };
}

export default function Page() {
  return <SinglePage />;
}