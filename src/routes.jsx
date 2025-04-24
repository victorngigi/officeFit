import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductPage from './pages/ProductPage';
import DeskPage from './pages/DeskPage';
import ConferenceTablePage from './pages/ConferenceTablePage';
import BookshelfCabinetPage from './pages/BookshelfCabinetPage';
import ChairPage from './pages/ChairPage';
import ViewProduct from './components/ViewProduct';  

export default function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Navigate to="/products" replace /> },
    { path: '/products', element: <ProductPage /> },
    { path: '/products/desks', element: <DeskPage /> },
    { path: '/products/conference-tables', element: <ConferenceTablePage /> },
    { path: '/products/chairs', element: <ChairPage /> },
    { path: '/products/bookshelves-cabinets', element: <BookshelfCabinetPage /> },
    { path: '/viewproduct/:category/:id', element: <ViewProduct /> }, 
    { path: '/cart', element: <Cart /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '*', element: <Navigate to="/products" replace /> }
  ]);

  return routes;
}
