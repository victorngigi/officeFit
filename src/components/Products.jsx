// ✅ src/components/Products.jsx
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState({
    chairs: [],
    desks: [],
    conferenceTables: [],
    bookshelvesAndCabinets: []
  });

  useEffect(() => {
    fetch("/db.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to load data:", err));
  }, []);

  return (
    <div className="container mx-auto p-5 space-y-12">
      {Object.entries(products).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-3xl font-bold capitalize mb-5">
            {category.replace(/And/g, " & ")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-56 object-cover bg-gray-100"
                  onError={(e) => {
                    console.log("Image failed to load:", product.imageUrl);
                    e.target.src = "https://via.placeholder.com/400x300?text=Image+Unavailable";
                  }}
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Ksh {product.price}</span>
                    <span className="text-sm text-green-600 font-mono">⭐ {product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;