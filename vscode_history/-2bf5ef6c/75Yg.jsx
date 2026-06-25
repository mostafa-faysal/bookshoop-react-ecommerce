import React, { useState } from "react";
import { useQuantity } from "../../src/hooks/useQuantity";

export default function Card({ product }) {
  const [quantity, setQuantity] = useState(useQuantity(product.qty));

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(Math.max(0, quantity - 1));

  return (
    <div className="mb-4 col-md-4">
      <div className="card h-100" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text grow">{product.description}</p>
          <p className="card-text fw-bold text-success">${product.price}</p>
          <div
            className="m-2 btn-group"
            role="group"
            aria-label="Quantity controls"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={decrement}
            >
              -
            </button>
            <span className="px-4 py-2 btn btn-outline-secondary disabled">
              {quantity}
            </span>
            <button
              type="button"
              className="btn btn-success"
              onClick={increment}
            >
              +
            </button>
          </div>
          <p className="p-3 m-2 card">Total:{quantity * product.price} </p>
          <button className="m-2 btn btn-primary">Add to card </button>
        </div>
      </div>
    </div>
  );
}
