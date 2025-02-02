import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

function App() {

  return (
    <div className='App'>
      <p>Test</p>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  )
}

export default App
