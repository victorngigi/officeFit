import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductPage() {
  return (
    <div>
      <h1>Explore Our Office Furniture</h1>
      <p>
        We believe your workspace should inspire you to do your best work. That's why we offer a
        wide range of office furniture designed to bring comfort, style, and productivity to your day.
        From strong desks to supportive chairs and practical storage, we’ve got everything your
        office needs.
      </p>
      <p>
        Start exploring:
      </p>
      <ul>
        <li><Link to="/products/desks">Desks</Link></li>
        <li><Link to="/products/chairs">Chairs</Link></li>
        <li><Link to="/products/conference-tables">Conference Tables</Link></li>
        <li><Link to="/products/bookshelves-cabinets">Bookshelves & Cabinets</Link></li>
      </ul>
    </div>
  );
}
