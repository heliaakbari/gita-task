import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {Modal,Row,Col,Form} from 'react-bootstrap';
import { validId } from './Regex';
import { editPerson} from './JsonManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'

export default function EditButton(props) {

  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName);
  const [id, setId] = useState(props.id);
  const [idCaption,setIdCaption] = useState(<Form.Text id="passwordHelpBlock" className='text-danger'>
                    کد ملی باید یک عدد ده رقمی باشد
                </Form.Text>);

  const handleClose = () => {setShow(false);
                            };
  const handleShow = () => {setShow(true);
                            setFirstName(props.firstName);
                            setLastName(props.lastName);
                            handleIdChange(props.id)
                            }


  function submit(){
    handleClose()
    editPerson(id,firstName,lastName,props.index);
    props.renderApp()
  }

  function handleIdChange(newId){
    setId(newId)
    console.log(newId)
    if (!validId.test(newId)) {
         setIdCaption(<Form.Text id="passwordHelpBlock" className='text-danger'>
                    کد ملی باید یک عدد ده رقمی باشد
                </Form.Text>);
      }
    else{
        setIdCaption(<Form.Text id="passwordHelpBlock" className='text-success'>
                    کد ملی قابل قبول است
                </Form.Text>);
    }
  }

  return (
    <>
      <Button className='mx-1 btn-sm' onClick={handleShow} ><FontAwesomeIcon icon={faPenToSquare} /></Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="my-modal m-0"
      >

        <Modal.Header>
          <Modal.Title>ویرایش</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form >
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>نام</Form.Label>
                <Form.Control type="input" defaultValue={firstName} onChange={evt=>setFirstName(evt.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>نام خانوادگی</Form.Label>
                <Form.Control type="input" defaultValue={lastName} onChange={evt=>setLastName(evt.target.value)}/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridId">
                <Form.Label>کد ملی</Form.Label>
                <Form.Control defaultValue={id} onChange={(evt)=>handleIdChange(evt.target.value)} />
                {idCaption}
                </Form.Group>
                <Form.Group as={Col} />
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
          { !validId.test(id) ?
            <Button variant="primary" disabled>ویرایش</Button>
            :
            <Button variant="primary" onClick={submit}>ویرایش</Button>
            }
        </Modal.Footer>

      </Modal>
    </>
  );
}

