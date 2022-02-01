
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Category from './components/Category';
import CategoryId from './components/CategoryId';
import Natural from './components/Natural';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route> 
          <Route path="/product/:id" element={<ItemDetailContainer/>} />
          <Route path="/category/:id" element={<CategoryId/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/natural" element={<Natural/>} />
          <Route path="/contact"  element={<Contact/>} /> 
          <Route path="/" exact element={<Home/>} /> 

        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App; 