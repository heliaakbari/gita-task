import { Table } from "react-bootstrap";
import data from "./assets/data.json";
import TableRow from "./TableRow";

let employees = data["employees"];
let rows =employees.map((item,index)=>{
    return(
    <TableRow {...item} key={index} index={index+1}></TableRow>)
})
console.log(rows)
export default function TableContainer(){
  return (
    <Table bordered hover className="table-primary table-bordered ">
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
    );
}