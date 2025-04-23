import { useState } from 'react'
import './App.css'
import AppRoutes from './routes'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar />
    <AppRoutes />
    <Footer />
    </BrowserRouter>
  )
}

export default App
