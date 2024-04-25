import {deletePerson} from './DataManager'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn} from '@fortawesome/free-solid-svg-icons'
import { Button,Modal } from 'react-bootstrap'
import { useState } from 'react';
import Chart from './Chart';

export default function ChartButton({data,renderApp}){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button className='mx-1 btn-sm' onClick={handleShow} title="حقوق"><FontAwesomeIcon icon={faChartColumn} /></Button>

      <Modal show={show} onHide={handleClose} className="my-modal">
        <Modal.Header >
        <Modal.Title>حقوق</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Chart data={data} ></Chart>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}