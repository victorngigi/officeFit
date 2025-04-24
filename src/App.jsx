
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import NavBar from './components/navBar.jsx';
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
