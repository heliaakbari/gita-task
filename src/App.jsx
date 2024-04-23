
import TableContainer from "./TableContainer";
import SearchBar from "./SearchBar"
import AddButton from "./AddButton"
import { useState } from "react";



export default function App() {
  const [stateToggle, stateToggler] = useState(false);
  const [searchInput,setSearchInput] = useState({lastName:"",firstName:'',id:""})
  console.log(searchInput)
  function renderApp(){
    stateToggler(!stateToggle)
  }

  return (
    <div>
      <header>لیست کارکنان شرکت</header>
      <SearchBar setSearchInput={setSearchInput}></SearchBar>
      <AddButton renderApp={renderApp}></AddButton>
      <TableContainer renderApp={renderApp} searchInput={searchInput}></TableContainer>
    </div>
  );
}
