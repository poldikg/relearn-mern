import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import { useAuthContext } from './hooks/useAuthContext.jsx'

function App() {
  const { user } = useAuthContext();


  return (
    <div className='App'>

      <Navbar />

      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      </Routes>

    </div>
  )
}

export default App
