import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import cartIcon from 'src/assets/search-interface-symbol.png'
function NavBar(){
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                className="h-8 w-auto" 
                src={logo} 
                alt="Office Fit" 
              />
              <span className="ml-2 text-xl font-semibold text-gray-900">BrandName</span>
            </Link>
          </div>

          {/* Search bar in the center */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cart icon on the right */}
          <div className="flex items-center">
            <Link 
              to="/cart" 
              className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 relative"
              aria-label="Shopping Cart"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9m12-9l2 9m-6-9v9" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
);
}

export default NavBar
