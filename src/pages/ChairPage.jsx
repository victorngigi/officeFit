import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function ChairPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setProducts(data.chairs || []));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Chairs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
