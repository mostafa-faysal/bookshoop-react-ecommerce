export default function ProductRating({ rating }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className={`mask mask-star ${
              star <= Math.round(rating) ? "bg-amber-300" : "bg-gray-300"
            }`}
            aria-label={`${star} star`}
            aria-current={
              star === Math.round(rating || 0) ? "true" : undefined
            }
          ></div>
        ))}
      </div>
      {rating && (
        <span className="text-sm font-medium text-gray-500">({rating})</span>
      )}
    </div>
  );
}
