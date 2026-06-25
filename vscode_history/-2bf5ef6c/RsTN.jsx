import React, { useState } from 'react'

export default function Card({ product }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(Math.max(0, quantity - 1));

  return (
    
    <div className="col-md-4 mb-4">
      <div className="card h-100" style={{ width: '18rem' }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text flex-grow-1">{product.description}</p>
          <p className="card-text fw-bold text-success">${product.price}</p>
          <div className="btn-group m-2" role="group" aria-label="Quantity controls">
            <button 
              type="button" 
              className="btn btn-danger" 
              onClick={decrement}
            >
              -
            </button>
            <span className="btn btn-outline-secondary disabled px-4 py-2">{quantity}</span>
            <button 
              type="button" 
              className="btn btn-success" 
              onClick={increment}
            >
              +
            </button>
          </div>
            <p className='card p-3 m-2'>Total:{quantity * product.price}  </p>
          <button className='btn btn-primary m-2'>Add to card </button>
        </div>
      </div>
    </div>
  );
}

