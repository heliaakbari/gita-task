import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {Modal} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Mapview from './Mapview';

export default function MapButton({renderApp,location}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className='mx-1 btn-sm' onClick={handleShow} title="مکان زندگی"><FontAwesomeIcon icon={faLocationDot} /></Button>
      <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="my-modal m-0"
      >

        <Modal.Header>
          <Modal.Title>محل زندگی</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Mapview location={location} editable={false}></Mapview>
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

