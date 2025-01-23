import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import WorkoutContextProvider from './context/WorkoutContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
