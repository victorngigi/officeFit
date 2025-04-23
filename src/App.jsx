import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import './index.css';

function App() {
  const [cart, setCart] = useState([]);

  const categories = [
    {
      name: "Chairs",
      image: "https://images.pexels.com/photos/37347/office-chair-desk-lamp.jpg",
      route: "workspace",
      products: [
        "https://images.unsplash.com/photo-1616627898699-1152688e9e0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1620635100870-3c9b8b43872d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1627451405732-caa7f573e476?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
      ]
    },
    {
      name: "Tables",
      image: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg",
      route: "dining",
      products: [
        "https://images.unsplash.com/photo-1616627853817-55d0ceac6be2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1630354418769-1eaf7d3d2345?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1578878683890-702a1bb9d566?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
      ]
    },
    {
      name: "Desk",
      image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      route: "lightdesk",
      products: [
        "https://images.unsplash.com/photo-1629382043575-6dbcb0b8c2d2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1575934381831-90302c95c9a1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1593062483890-37787e74d13f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
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

        <div className="main-content">
          <div className="categories">
            {categories.map((cat, index) => (
              <div key={index} className="category-card">
                <h2>{cat.name}</h2>
                <div className="carousel">
                  {cat.products.map((product, productIndex) => (
                    <div key={productIndex} className="carousel-item">
                      <img src={product} alt={`Product ${productIndex}`} />
                    </div>
                  ))}
                </div>
                <Link to={`/category/${cat.route}`}>View More</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
