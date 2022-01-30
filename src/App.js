
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Category from './components/Category';
import CategoryId from './CategoryId';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route> 
          <Route path="/category/:id" element={<CategoryId/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/contact"  element={<Contact/>} /> 
          <Route path="/" exact element={<Home/>} /> 

        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App; 