import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <div className='App'>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  )
}

export default App
