
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faChartColumn,faTrashCan , faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import {deletePerson} from './JsonManager'
import EditButton from './EditButton'
import MapButton from './MapButton'

export default function TableRow(props){
    return(
        <tr>
          <td>{props.index + 1}</td>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.id}</td>
          <td>
            <Button className='mx-1 btn-sm'><FontAwesomeIcon icon={faEye} /></Button>
            <EditButton {...props}/>
            <MapButton className='mx-1 btn-sm' location={props.location}></MapButton>
            <Button className='mx-1 btn-sm' onClick={()=>{deletePerson(props.index); props.renderApp();}}><FontAwesomeIcon icon={faTrashCan} /></Button>
            <Button className='mx-1 btn-sm'><FontAwesomeIcon icon={faChartColumn} /></Button>
          </td>
        </tr>
    )
}