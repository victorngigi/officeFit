import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CategoryPage = ({ categories }) => {
  const { categoryId } = useParams();

  // Find the selected category
  const selectedCategory = categories.find((cat) => cat.route === categoryId);

  return (
    <div className="category-page">
      <h2>{selectedCategory?.name}</h2>
      <div className="carousel-container">
        {selectedCategory?.products.map((product, index) => (
          <div key={index} className="carousel-item">
            <img src={product.image} alt={product.name} />
            <div className="overlay">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <button className="overlay-button" onClick={() => {}}>
                Add to Cart
              </button>
              <Link to={`/product/${product.name}`} className="view-link">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
