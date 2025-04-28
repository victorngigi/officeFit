import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product, category, disableNavigation, onAddToCart }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disableNavigation) {
      navigate(`/products/${category}/${product.id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col h-full cursor-pointer bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-200 ${
        disableNavigation ? 'cursor-default' : ''
      }`}
    >
      <div className="flex-1">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />
      
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="text-blue-600 font-bold">KSH {product.price}</p>
        <p className="text-yellow-500">⭐ {product.rating}</p>
      </div>
      {disableNavigation && onAddToCart && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
          className="mt-4 py-2 px-4 bg-black text-white rounded-md w-full hover:bg-gray-800 transition duration-200"
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
