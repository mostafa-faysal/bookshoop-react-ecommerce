export default function BookCard({ book }) {
  return (
    <div className="overflow-hidden mx-5 w-48 rounded-2xl shadow-xl border-[D9176C] my-20">
      <img
        src={book.image}
        alt={book.title}
        className="object-cover w-50 h-70"
      />
    </div>
  );
}
