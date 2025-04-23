import React, { useState } from 'react';
import { products as initialProducts } from './data';  // Importing data from data.js
import ProductCard from './ProductCard';  // Importing the ProductCard component
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  // Handle search
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter products by name
    const filtered = initialProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    // Check if product already exists in the cart
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Handle Remove from Cart
  const handleRemoveFromCart = (productName) => {
    const newCart = cart.filter((item) => item.name !== productName);
    setCart(newCart);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="app">
      <header className="hero">
        <h1 className="site">OfficeFit</h1>
      </header>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <div className="cart-info">
          <span>Cart: {cart.length} items</span>
          <button className="view-cart-btn">View Cart</button>
        </div>
      </div>

      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>

      {/* Cart Modal or Cart Details */}
      {cart.length > 0 && (
        <div className="cart-modal">
          <h2>Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => handleRemoveFromCart(item.name)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
