
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ViewButton({firstName,lastName,id}){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button className='mx-1 btn-sm' onClick={handleShow}><FontAwesomeIcon icon={faEye} /></Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>مشاهده</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row className='mx-2 my-3'>
                    <Col>نام</Col>
                    <Col>{firstName}</Col>
                </Row>
                <Row className='mx-2 my-3'>
                    <Col>نام خانوادگی</Col>
                    <Col>{lastName}</Col>
                </Row>
                <Row className='mx-2 my-3'>
                    <Col>کد ملی</Col>
                    <Col>{id}</Col>
                </Row>
                </Container>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleClose}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}