import Link from "next/link";

export default function ProductImage({ image, title, id, imgClassName = "object-cover" }) {
  return (
    <Link
      href={`/post/${id}`}
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
