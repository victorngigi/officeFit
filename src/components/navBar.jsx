import React from 'react'
import logo from "../assets/logo.png"

export default function NavBar() {
  return (
    <div>
  <header className="flex items-center justify-between text-black py-6 px-8 md:px-32 bg-white drop-shadow-md relative">
    {/* Logo */}
    <a href="#" className="flex-1">
      <img src={logo} alt="logo" className="w-12" />
    </a>

    {/* Search Bar */}
    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-3">
      <i className="bx bx-search text-2xl text-gray-500 absolute left-3"></i>
      <input
        type="text"
        placeholder="search"
        className="py-2 pl-10 pr-4 rounded-xl border-2 border-black focus:bg-slate-100 focus:outline-sky-500 w-80"
      />
    </div>

    {/* Cart */}
    <div className="flex-1 flex justify-end">
      <button>
        <i className="bx bx-cart text-3xl text-gray-700"></i>
      </button>
    </div>
  </header>

  {/* Link navigation */}
  <nav className="bg-white border-t border-gray-200 px-8 md:px-32 py-2 flex gap-6 text-sm font-medium text-gray-700">
    <a href="/products" className="hover:text-blue-600">Products</a>
    <a href="/products/chairs" className="hover:text-blue-600">Chairs</a>
    <a href="/products/desks" className="hover:text-blue-600">Desks</a>
    <a href="/products/conference-tables" className="hover:text-blue-600">Conference Tables</a>
    <a href="/products/bookshelves-cabinets" className="hover:text-blue-600">Cabinets & Bookshelves</a>
  </nav>
</div>

  )
}
