import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login';
import Students from './pages/Students';
import Register from './pages/Register';
import Footer from './components/Footer';
import Venues from './pages/Venues';
import OpenVenue from './pages/OpenVenue';


function App() {
 

  return (
      <div className="App">
        <Navbar/>
      <div className="content">
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/students" element={<Students />}></Route>
            <Route path="/venues" element={<Venues/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/venues/:id" element={<OpenVenue />} />
      </Routes>
      </div>
      <Footer/>
    </div>

  )
}

export default App
