
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Category from './components/Category';
import CategoryId from './components/CategoryId';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart";
import { CartProvider } from './context/CartContext';
import AddProduct from './components/AddProduct';
import Meli from './components/Meli';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route> 
            <Route path="/addproduct" element={<AddProduct/>}/>
            <Route path="/product/:id" element={<ItemDetailContainer/>} />
            <Route path="/category/:id" element={<CategoryId/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/meli" element={<Meli/>} />
            <Route path="/contact"  element={<Contact/>} /> 
            <Route path="/" exact element={<Home/>} /> 

          </Route>
          
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App; 