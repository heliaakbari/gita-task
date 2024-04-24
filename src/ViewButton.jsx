
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import { Button,Container,Row,Col,Modal } from 'react-bootstrap'
import { useState } from 'react';

export default function ViewButton({firstName,lastName,id}){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button className='mx-1 btn-sm' title="مشاهده" onClick={handleShow}><FontAwesomeIcon icon={faEye} /></Button>

      <Modal show={show} onHide={handleClose} className="my-modal">
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