import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // fetch("/db.json")
    fetch(`http://localhost:3001/${category}`)

      .then((res) => res.json())
      .then((data) => {
        const categoryData = data[category];
        if (categoryData) {
          const item = categoryData.find((product) => product.id === parseInt(id));
          setProduct(item);
        }
      });
  }, [category, id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} style={{ width: "300px" }} />
      <h1>{product.name}</h1>
      <p><strong>Price:</strong> Ksh {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>
      <p><strong>Color:</strong> {product.color}</p>
    </div>
  );
};

export default ProductPage;
