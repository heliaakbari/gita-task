
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faChartColumn,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import EditButton from './EditButton'
import MapButton from './MapButton'
import DeleteButton from './deleteButton'

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
            <MapButton location={props.location}></MapButton>
            <DeleteButton index={props.index} renderApp={props.renderApp} />
            <Button className='mx-1 btn-sm'><FontAwesomeIcon icon={faChartColumn} /></Button>
          </td>
        </tr>
    )
}