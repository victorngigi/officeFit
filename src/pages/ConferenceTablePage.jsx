import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

export default function ConferenceTablePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.conferenceTables || []));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Conference Tables</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => navigate(`/products/conferenceTables/${product.id}`)} />
        ))}
      </div>
    </div>
  );
}