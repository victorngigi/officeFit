import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function ChairPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'db.json')
      .then(res => res.json())
      .then(data => setProducts(data.chairs || []));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <h2 className="text-3xl font-bold mb-6">Chairs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            category="chairs"
          />
        ))}
      </div>
    </div>
  );
}
