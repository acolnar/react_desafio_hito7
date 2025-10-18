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
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute"
import AuthRedirect from "./components/AuthRedirect"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pizza/:id' element={<Pizza/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<AuthRedirect><Login/></AuthRedirect>} />
        <Route path='/register' element={<AuthRedirect><Register/></AuthRedirect>} />
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path='*' element={<div className='p-6'>Página no encontrada</div>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
