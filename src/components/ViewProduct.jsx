import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function ViewProduct() {
  const { productId, category } = useParams();
  const { dispatch } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/${category}/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading product:", err);
        setLoading(false);
      });
  }, [productId, category]);

  if (loading) return <div className="text-center mt-20 text-xl">Loading product...</div>;
  if (!product) return <div className="text-center mt-20 text-red-500">Product not found</div>;

  return (
    <div className="h-screen flex justify-center items-center max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">{product.name}</h2>
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm w-fit uppercase">
            {category}
          </span>
          <p className="text-lg text-gray-700">{product.description}</p>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold text-black">${product.price}</h3>
            <p className="text-yellow-500 text-xl font-bold">⭐ {product.rating}</p>
          </div>
          <button
            onClick={() =>
              dispatch({
                type: 'ADD_TO_CART',
                payload: {
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  imageUrl: product.imageUrl,
                },
              })
            }
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
