import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Students from './pages/Students'
import Subjects from './pages/Subjects'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

/* test */