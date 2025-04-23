import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Desks = () => {
  const [desks, setDesks] = useState([]);

  useEffect(() => {
    // fetch("/db.json")
    fetch("http://localhost:3001/desks") // for Desks.jsx
      .then(res => res.json())
      .then(data => setDesks(data.desks));
  }, []);

  return (
    <div>
      <h2>Office Desks</h2>
      <div className="product-grid">
        {desks.map(desk => (
          <Link to={`/product/desks/${desk.id}`} key={desk.id} className="product-card">
            <img src={desk.imageUrl} alt={desk.name} />
            <h3>{desk.name}</h3>
            <p>Ksh {desk.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Desks;
