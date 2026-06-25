import React from 'react'

export default function Card() {
  const Products = [
    {
      name: "iphone13",
      price: "50$"
    },
    {
      name: "iphone14",
      price: "60$"
    },
    {
      name: "iphone15",
      price: "60$"
    },
    {
      name: "iphone16",
      price: "70$"
    },
    {
      name: "iphone17",
      price: "80$"
    },
  ];



  return (
    Products.map((e)=>{
    <div className="col-md-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src="/src/assets/react.svg" className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">{e.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    </div>
  
})
  )
}

