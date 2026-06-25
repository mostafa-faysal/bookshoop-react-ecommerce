import React from 'react';
import Card from '../cardProduct/Card';
import Comments from '../comments/Comments';

export default function ContainerProducts() {
  const products = [
    {
      id: 1,
      name: "iPhone 13",
      price: 599,
      description: "Latest iPhone with great camera",
      image: "/src/assets/react.svg"
    },
    {
      id: 2,
      name: "iPhone 14",
      price: 699,
      description: "Advanced features and better battery",
      image: "/src/assets/react.svg"
    },
    {
      id: 3,
      name: "iPhone 15",
      price: 799,
      description: "Future ready with AI features",
      image: "/src/assets/react.svg"
    },
    {
      id: 4,
      name: "iPhone 16",
      price: 899,
      description: "Pro model with pro camera system",
      image: "/src/assets/react.svg"
    },
    {
      id: 5,
      name: "iPhone 17",
      price: 999,
      description: "Top tier performance",
      image: "/src/assets/react.svg"
    },
    {
      id: 6,
      name: "iPhone 17 Pro",
      price: 1199,
      description: "Ultimate iPhone experience",
      image: "/src/assets/react.svg"
    }
  ];

  return (
    <div className='container'>
      <div className="row mt-5 g-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      <Comments/>
      </div>
    </div>
  );
}

