import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'db.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  const categories = [
    { key: 'chairs', title: 'Chairs', path: 'chairs' },
    { key: 'desks', title: 'Desks', path: 'desks' },
    { key: 'conferenceTables', title: 'Conference Tables', path: 'conference-tables' },
    { key: 'bookshelvesAndCabinets', title: 'Bookshelves & Cabinets', path: 'bookshelves-cabinets' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {data &&
        categories.map(({ key, title, path }) => {
          const sortedProducts = [...(data[key] || [])].sort((a, b) => b.rating - a.rating);
          const top4 = sortedProducts.slice(0, 4);

          return (
            <div key={key}>
              <h2 className="text-3xl font-bold mb-6">{title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {top4.map(product => (
                  <ProductCard key={product.id} product={product} category={key} />
                ))}
                <div
                  onClick={() => navigate(`/products/${path}`)}
                  className="h-full cursor-pointer bg-gray-100 rounded-xl flex flex-col items-center justify-center text-blue-600 font-semibold hover:underline hover:bg-gray-200 transition min-h-[200px]"
                >
                  <span>See more</span>
                  <span className="text-2xl mt-1"></span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
