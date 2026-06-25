import { Link } from "react-router-dom";

export default function ProductImage({ image, title, id }) {
  return (
    <figure className="flex justify-center h-full rounded-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-full rounded-2xl shadow-xl"
      />
    </figure>
  );
}
