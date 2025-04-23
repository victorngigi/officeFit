import React from 'react';

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>

      <div className="reviews">
        <h5>Customer Reviews:</h5>
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.user}</strong>: {review.comment} (Rating: {review.rating}⭐)
            </li>
          ))}
        </ul>
      </div>

      <button
        className="add-to-cart-btn"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
