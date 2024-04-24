
import TableContainer from "./TableContainer";
import SearchBar from "./SearchBar"
import AddButton from "./AddButton"
import { useState } from "react";
import { defaultLocation } from "./Utility";



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
      <AddButton styling='my-3' renderApp={renderApp} initVals={{firstName:'',lastName:'',id:'',location:defaultLocation}} actionName="افزودن">افزودن</AddButton>
      <TableContainer renderApp={renderApp} searchInput={searchInput}></TableContainer>
    </div>
  );
}
