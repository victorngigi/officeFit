import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  console.log("Product ID:", id); // Log for debugging
  return (
    <div>
      <h2>Product Details Page</h2>
      <p>Product ID: {id}</p>
      {/* You can add more detailed information for each product here */}
    </div>
  );
};

export default ProductPage;
