import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function ViewProduct() {
  const [product, setProduct] = useState({});
  const { productId, category } = useParams();
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:3000/${category}/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, category]);

  return (
    <div className="h-screen flex justify-center items-center max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="col-span-1">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="col-span-1">
          <div className="p-5 flex flex-col gap-3">
            <h2 className="font-mono text-4xl font-bold">{product.name}</h2>
            <div className="bg-orange-500/[0.15] text-orange-500 px-2 rounded-sm w-fit text-font-medium">
              {category}
            </div>
            <p className="font-medium text-gray-600 text-lg">{product.description}</p>
          </div>
          <div className="flex justify-between items-center p-5">
            <h4 className="text-2xl font-bold font-mono">${product.price}</h4>
            <p className={
              product.rating >= 4.0
                ? 'font-mono font-bold text-xl text-green-500'
                : product.rating >= 2.5
                ? 'font-mono font-bold text-xl text-orange-400'
                : 'font-mono font-bold text-xl text-red-500'
            }>
              {product.rating}
            </p>
          </div>
          <div className="mt-5 p-5 w-full">
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
              className="p-5 w-full rounded-lg text-white bg-black"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
