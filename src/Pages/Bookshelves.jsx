import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Bookshelves = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/db.json")
    // fetch("http://localhost:3001/bookshelvesAndCabinets") // for Bookshelves.jsx
      .then(res => res.json())
      .then(data => setItems(data.bookshelvesAndCabinets));
  }, []);

  return (
    <div>
      <h2>Bookshelves & Cabinets</h2>
      <div className="product-grid">
        {items.map(item => (
          <Link to={`/product/bookshelvesAndCabinets/${item.id}`} key={item.id} className="product-card">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Ksh {item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bookshelves;
