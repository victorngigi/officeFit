import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Checkout() {
  const { state: { items: cartItems } } = useContext(CartContext);
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'db.json')
      .then(res => res.json())
      .then(data => {
        setProductsData(data);
        setLoading(false);
      });
  }, []);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) return <p className="p-6 text-center">Loading products…</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-medium mb-4">Shopping Cart</h2>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="ml-4">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
        <aside className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-medium mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t pt-4 font-semibold text-lg">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Complete Purchase
          </button>
        </aside>
      </div>
    </div>
  );
}
