import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import ProductPage from './ProductPage';
import './index.css';

function App() {
  const categories = [
    {
      name: "Chairs",
      image: "https://images.pexels.com/photos/37347/office-chair-desk-lamp.jpg",
      route: "workspace",
      products: [
        { 
          image: "https://images.unsplash.com/photo-1616627898699-1152688e9e0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3", 
          price: 250, 
          name: "Office Chair"
        }
      ]
    },
    {
      name: "Tables",
      image: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg",
      route: "dining",
      products: [
        { 
          image: "https://images.unsplash.com/photo-1616627853817-55d0ceac6be2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3", 
          price: 250, 
          name: "Wooden Dining Table"
        }
      ]
    },
    {
      name: "Desk",
      image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      route: "lightdesk",
      products: [
        { 
          image: "https://images.unsplash.com/photo-1629382043575-6dbcb0b8c2d2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3", 
          price: 500, 
          name: "Minimalist Desk"
        }
      ]
    }
  ];

  return (
    <Router>
      <header className="hero">
        <h1 className="site">OfficeFit</h1>
      </header>

      <div className="app-container">
        <div className="sidebar">
          <h3>Filter by Price</h3>
          <label>Min Price</label>
          <input type="number" placeholder="price" />
          <label>Max Price</label>
          <input type="number" placeholder="price" />
          <button className="apply-btn">Apply</button>
        </div>
        <div></div>






        <div className="main-content">
          <div className="categories">
            {categories.map((cat, index) => (
              <Link key={index} to={`/category/${cat.route}`} className="category-card">
                <img src={cat.image} alt={cat.name} />
                <div className="overlay">
                  <h2>{cat.name}</h2>
                </div>
              </Link>
            ))}
          </div>

          <Routes>
            <Route path="/category/:categoryId" element={<CategoryPage categories={categories} />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
