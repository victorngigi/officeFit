import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = ({ categories }) => {
  const { categoryId } = useParams();
  const category = categories.find(cat => cat.route === categoryId);

  if (!category) {
    return <div>Category not found!</div>;
  }

  return (
    <div>
      <h2>{category.name}</h2>
      <div>
        {category.products.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.name} />
            <p>{product.name} - ${product.price}</p>
            <Link to={`/product/${index}`}><button>View Details</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
