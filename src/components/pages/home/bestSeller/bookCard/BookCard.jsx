import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="overflow-hidden mx-5 w-48 rounded-2xl shadow-xl border-[D9176C] my-20 h-[40vh]">
      <Link to={`/post/${book.id}`} className="block w-full h-full">
        <img
          src={book.image}
          alt={book.title}
          className="block object-cover w-full h-full"
        />
      </Link>
    </div>
  );
}
