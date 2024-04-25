import { useState,useRef } from 'react';
import {Modal,Row,Col,Form,Button} from 'react-bootstrap';
import { validId} from './Utility';
import { addPerson, editPerson} from './DataManager';
import Mapview from './Mapview';
import PersonelForm from './PersonelForm';


export default function AddButton({renderApp,initVals,actionName,children,index=null,styling}) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    firstNameRef.current = initVals.firstName;
    lastNameRef.current = initVals.lastName;
    idRef.current = initVals.id;
    locationRef.current = initVals.location;
    setShow(false)};

  const handleShow = () => setShow(true);

  const firstNameRef = useRef(initVals.firstName);
  const lastNameRef= useRef(initVals.lastName);
  const idRef= useRef(initVals.id);
  const locationRef= useRef(initVals.location);

  function submit(){
    if (validId.test(idRef.current)) {
      if (index !== null){
        editPerson(idRef.current,firstNameRef.current,lastNameRef.current,locationRef.current,index)
        setShow(false)
      }
      else{
        addPerson(idRef.current,firstNameRef.current,lastNameRef.current,locationRef.current)
        handleClose()
      }
      renderApp()
      }
  }


  return (
    <>
      <Button variant="primary"  className={styling} onClick={handleShow}>{children}</Button>

      <Modal
        show={show}
        size='lg'
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="my-modal"
      >

        <Modal.Header>
          <Modal.Title>{actionName}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
          <PersonelForm firstNameRef={firstNameRef} lastNameRef={lastNameRef} idRef={idRef}></PersonelForm>
          <Form as={Col}>
          <Form.Label>محل زندگی را انتخاب کنید</Form.Label>
        <Mapview editable={true} locationRef={locationRef} location={locationRef.current}/>
        </Form>
        </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
            <Button variant="primary" onClick={submit}>{actionName}</Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

