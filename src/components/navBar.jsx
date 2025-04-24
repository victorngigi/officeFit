import React from 'react'
import logo from "/src/assets/logo.png"

export default function NavBar() {
  return (
    <div>
      <header className="flex items-center justify-between text-black py-6 px-8 md:px-32 bg-white drop-shadow-md relative">
        {/* Logo on the left */}
        <a href="#" className="flex-1">
          <img src={logo} alt="logo" className="w-12" />
        </a>

        {/* Centered Search Bar */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-3">
          <i className="bx bx-search text-2xl text-gray-500 absolute left-3"></i>
          <input
            type="text"
            placeholder="search"
            className="py-2 pl-10 pr-4 rounded-xl border-2 border-black focus:bg-slate-100 focus:outline-sky-500 w-80"
          />
        </div>

        {/* Cart Icon on the right */}
        <div className="flex-1 flex justify-end">
          <button>
            <i className="bx bx-cart text-3xl text-gray-700"></i>
          </button>
        </div>
      </header>
    </div>
  )
}
