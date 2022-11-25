import React from 'react'
import '../styles/App.css'
import "bootswatch/dist/slate/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />        
      </Routes>
    </Router>
  )
}

export default App

