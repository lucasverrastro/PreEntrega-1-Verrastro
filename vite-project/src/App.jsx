import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from "./components/ItemListConteiner/ItemListConteiner";
import { useState } from "react";
import './index.css'


function App() {

  return <div>
    <NavBarComponent />
    <ItemListContainer greeting = "Welcome to Best Market"/> 
  </div>;
}

export default App;