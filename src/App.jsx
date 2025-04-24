=======
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/footer.jsx"
import './App.css';
import AppRoutes from './routes';
import NavBar from './components/NavBar';
import Footer from "./components/footer.jsx"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
