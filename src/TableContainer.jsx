import { Table } from "react-bootstrap";
import { giveList } from "./DataManager";
import TableRow from "./TableRow";
import {searchMatch} from "./Utility"
export default function TableContainer({renderApp,searchInput}){
  let rows =giveList().map((item,index)=>{
    if(searchMatch(searchInput,item))
    {
    return(
    <TableRow {...item} key={index} index={index} renderApp={renderApp}></TableRow>)
    }
})

  return (
    <>
    
    <Table bordered hover className="table-primary table-bordered">
      <thead>
        <tr>
          <th>ردیف</th>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>کد ملی</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
    </>
    );
}