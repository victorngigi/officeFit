import React from 'react';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductPage from './pages/ProductPage';
import DeskPage from './pages/DeskPage';
import ConferenceTablePage from './pages/ConferenceTablePage';
import BookshelfCabinetPage from './pages/BookshelfCabinetPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/desks" element={<DeskPage />} />
      <Route path="/products/conference-tables" element={<ConferenceTablePage />} />
      <Route path="/products/bookshelves-cabinets" element={<BookshelfCabinetPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
