import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Chairs = () => {
  const [chairs, setChairs] = useState([]);

  useEffect(() => {
    // fetch("/db.json")
    fetch("http://localhost:3001/chairs") // for Chairs.jsx
      .then(res => res.json())
      .then(data => setChairs(data.chairs));
  }, []);

  return (
    <div>
      <h2>Office Chairs</h2>
      <div className="product-grid">
        {chairs.map(chair => (
          <Link to={`/product/chairs/${chair.id}`} key={chair.id} className="product-card">
            <img src={chair.imageUrl} alt={chair.name} />
            <h3>{chair.name}</h3>
            <p>Ksh {chair.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Chairs;
