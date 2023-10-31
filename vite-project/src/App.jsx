import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from "./components/ItemListConteiner/ItemListConteiner";

function App() {

  return <div>
    <NavBarComponent />
    <ItemListContainer greeting = "Bienvenido al Market"/> 
  </div>;
}

export default App;