
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPenToSquare,faChartColumn,faTrashCan , faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'


export default function TableRow(props){
    return(
        <tr>
          <td>{props.index}</td>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.id}</td>
          <td>
            <Button><FontAwesomeIcon icon={faEye} /></Button>
            <Button><FontAwesomeIcon icon={faPenToSquare} /></Button>
            <Button><FontAwesomeIcon icon={faLocationDot} /></Button>
            <Button><FontAwesomeIcon icon={faTrashCan} /></Button>
            <Button><FontAwesomeIcon icon={faChartColumn} /></Button>
          </td>
        </tr>
    )
}