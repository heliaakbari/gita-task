
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import AddButton from './AddButton'
import MapButton from './MapButton'
import DeleteButton from './DeleteButton'
import ViewButton from './ViewButton'
import ChartButton from './ChartButton'


export default function TableRow(props){
    return(
        <tr>
          <td>{props.index + 1}</td>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.id}</td>
          <td>
            <ViewButton {...props}/>
            <AddButton  styling='mx-1 btn-sm' renderApp={props.renderApp} initVals={{...props}} actionName="ویرایش" index={props.index}><FontAwesomeIcon icon={faPenToSquare} /> </AddButton>
            <MapButton location={props.location}></MapButton>
            <DeleteButton index={props.index} renderApp={props.renderApp} />
            <ChartButton className='mx-1 btn-sm' title="چارت حقوق" data={props.chart}></ChartButton>
          </td>
        </tr>
    )
}