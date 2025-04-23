import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-footer">
        <Link to="/">Continue Shopping</Link>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
