import Button from 'react-bootstrap/Button';
import { useState,useRef } from 'react';
import {Modal,Row,Col,Form} from 'react-bootstrap';
import { validId } from './Regex';
import { addPerson, giveList } from './JsonManager';
import Mapir from 'mapir-react-component';
import 'mapir-react-component/dist/index.css';
import Mapview from './Mapview';
import PersonelForm from './PersonelForm';

export default function AddButton({renderApp}) {
  const defaultLocation = [51.42047, 35.729054]
  const [show, setShow] = useState(false);
  const handleClose = () => {
    firstNameRef.current = "";
    lastNameRef.current = "";
    idRef.current = ""
    locationRef.current = defaultLocation;
    setShow(false)}
    ;
  const handleShow = () => setShow(true);
  const firstNameRef = useRef('')
  const lastNameRef = useRef('')
  const idRef = useRef('')
  const locationRef = useRef(defaultLocation)


  function submit(){
    console.log([firstNameRef.current,lastNameRef.current,idRef.current,locationRef.current])

    if (validId.test(idRef.current)) {
      addPerson(idRef.current,firstNameRef.current,lastNameRef.current,locationRef.current)
      handleClose()
      renderApp()
      }
  }


  return (
    <>
      <Button variant="primary" className='my-3' onClick={handleShow}>افزودن</Button>

      <Modal
        show={show}
        size='lg'
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="my-modal"
      >

        <Modal.Header>
          <Modal.Title>افزودن</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
          <PersonelForm firstNameRef={firstNameRef} lastNameRef={lastNameRef} idRef={idRef}></PersonelForm>
          <Form as={Col}>
          <Form.Label>محل زندگی را انتخاب کنید</Form.Label>
        <Mapview editable={true} locationRef={locationRef}/>
        </Form>
        </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
            <Button variant="primary" onClick={submit}>افزودن</Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

