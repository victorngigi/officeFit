import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Chairs from './Pages/Chairs';  // Updated path
import Desks from './Pages/Desks';    // Updated path (assuming other files are also in Pages)
import ConferenceTables from './Pages/ConferenceTables'; // Updated path
import Bookshelves from './Pages/Bookshelves';           // Updated path
import Cabinets from './Pages/Cabinets';                 // Updated path
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chairs" element={<Chairs />} />
            <Route path="/desks" element={<Desks />} />
            <Route path="/conference-tables" element={<ConferenceTables />} />
            <Route path="/bookshelves" element={<Bookshelves />} />
            <Route path="/cabinets" element={<Cabinets />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;