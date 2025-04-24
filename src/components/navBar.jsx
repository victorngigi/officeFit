import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { CartContext } from '../context/CartContext';

export default function NavBar() {
  const { state: { items } } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/products" className="flex items-center">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <span className="ml-2 text-xl font-bold text-gray-800">OfficeFit</span>
        </Link>

        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-1 w-1/3">
          <i className="bx bx-search text-xl text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent focus:outline-none w-full text-gray-700"
          />
        </div>

        <div className="relative flex items-center" ref={ref}>
          <button
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            onClick={() => setOpen(o => !o)}
          >
            <i className="bx bx-cart text-2xl text-gray-700" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>

          {open && (
            <div className="absolute right-0 top-full mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
                <ul className="max-h-64 overflow-y-auto space-y-2">
                  {items.map(item => (
                    <li key={item.id} className="flex justify-between text-gray-800">
                      <span className="truncate w-40">{item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-semibold text-gray-900">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Link
                  to="/checkout"
                  className="mt-4 block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-2 flex space-x-8 text-sm font-medium text-gray-600">
          <Link to="/products" className="hover:text-gray-900">All Products</Link>
          <Link to="/products/chairs" className="hover:text-gray-900">Chairs</Link>
          <Link to="/products/desks" className="hover:text-gray-900">Desks</Link>
          <Link to="/products/conference-tables" className="hover:text-gray-900">Conference Tables</Link>
          <Link to="/products/bookshelves-cabinets" className="hover:text-gray-900">Cabinets & Bookshelves</Link>
        </div>
      </nav>
    </div>
  );
}
