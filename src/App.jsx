import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Pizza from "./components/Pizza"
import Cart from './components/Cart'
//import Register from './components/Register'
//import Login from './components/Login'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Pizza/>
      {/* <Cart/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      <Footer/>
    </>
  );
};

export default App;
