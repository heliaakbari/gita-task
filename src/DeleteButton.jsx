import {deletePerson} from './JsonManager'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function DeleteButton({index,renderApp}){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDelete(){
    deletePerson(index)
    handleClose()
    renderApp()
  }
  return (
    <>

      <Button className='mx-1 btn-sm' onClick={handleShow}><FontAwesomeIcon icon={faTrashCan} /></Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>حذف</Modal.Title>
        </Modal.Header>
        <Modal.Body>آیا رکورد حذف شود؟</Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleDelete}>
            بله
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            خیر
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}