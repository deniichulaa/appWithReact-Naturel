
import './App.css';
import NavBar from'./components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer greeting={"Saludos a mi Tutor"}/>

    </div>
  );
}

export default App;
