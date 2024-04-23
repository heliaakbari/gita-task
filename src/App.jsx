
import TableContainer from "./TableContainer";
import SearchBar from "./SearchBar"
import AddButton from "./AddButton"
import { useState } from "react";



export default function App() {
  const [stateToggle, stateToggler] = useState(false);

  function renderApp(){
    stateToggler(!stateToggle)
  }
  
  return (
    <div>
      <header>لیست کارکنان شرکت</header>
      <SearchBar></SearchBar>
      <AddButton renderApp={renderApp}></AddButton>
      <TableContainer renderApp={renderApp}></TableContainer>
    </div>
  );
}
