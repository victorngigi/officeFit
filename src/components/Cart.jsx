import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { state: { items }, dispatch } = useContext(CartContext);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <ul className="space-y-4">
          {items.map(item => (
            <li key={item.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded object-cover" />
                <div className="ml-4">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price} × {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, quantity: item.quantity - 1 } })}
                  disabled={item.quantity === 1}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, quantity: item.quantity + 1 } })}>
                  +
                </button>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
                  className="text-red-500"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex justify-between font-semibold text-lg">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}