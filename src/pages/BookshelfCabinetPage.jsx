import React, { useEffect, useState } from "react";

const BookshelvesAndCabinetsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.bookshelvesAndCabinets || []));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Bookshelves & Cabinets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-xl shadow-md">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
            <p className="text-yellow-500">⭐ {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookshelvesAndCabinetsPage;
