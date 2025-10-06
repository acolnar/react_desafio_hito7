import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pizza from "./pages/Pizza"
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/pizza/p001' element={<Pizza/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/404' element={<NotFound/>} />
        <Route path='/*' element={<Navigate to="/404" replace/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
