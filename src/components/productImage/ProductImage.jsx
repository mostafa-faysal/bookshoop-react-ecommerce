import { Link } from "react-router-dom";

export default function ProductImage({ image, title, id, imgClassName = "" }) {
  return (
    <Link
      to={`/post/${id}`}
      className="flex justify-center w-full h-full rounded-2xl"
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-full rounded-2xl ${imgClassName}`}
      />
    </Link>
  );
}
