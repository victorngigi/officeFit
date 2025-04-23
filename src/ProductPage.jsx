import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ categories }) => {
  const { id } = useParams();

  // Find the selected product from the categories
  let productDetails = {};
  categories.forEach((category) => {
    const product = category.products.find((prod) => prod.name === id);
    if (product) productDetails = product;
  });

  return (
    <div className="product-page">
      <h2>{productDetails.name}</h2>
      <div className="product-details">
        <img src={productDetails.image} alt={productDetails.name} />
        <div className="details">
          <p>Price: ${productDetails.price}</p>
          <p>{productDetails.description}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
          <div className="reviews">
            <h3>Customer Reviews</h3>
            {/* Implement the reviews section here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
