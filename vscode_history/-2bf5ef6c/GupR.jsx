import React from 'react'

export default function Card({ product }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100" style={{ width: '18rem' }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text flex-grow-1">{product.description}</p>
          <p className="card-text fw-bold text-success">${product.price}</p>
          <div class="btn-group m-5" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <span  class="m">Middle</span>
  <button type="button" class="btn btn-primary">Right</button>
</div>
          <a href="#" className="btn btn-primary mt-auto">Add to Cart</a>
        </div>
      </div>
    </div>
  );
}

