import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ConferenceTables = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    // fetch("/db.json")
    fetch("http://localhost:3001/conferenceTables") // for ConferenceTables.jsx
      .then(res => res.json())
      .then(data => setTables(data.conferenceTables));
  }, []);

  return (
    <div>
      <h2>Conference Tables</h2>
      <div className="product-grid">
        {tables.map(table => (
          <Link to={`/product/conferenceTables/${table.id}`} key={table.id} className="product-card">
            <img src={table.imageUrl} alt={table.name} />
            <h3>{table.name}</h3>
            <p>Ksh {table.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConferenceTables;
