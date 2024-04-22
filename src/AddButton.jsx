import Button from 'react-bootstrap/Button';
import { Fragment, useState } from 'react';
import {Modal,Row,Col,Form} from 'react-bootstrap';
import { validId } from './Regex';
import { addPerson, giveList } from './JsonManager';
import Mapir from 'mapir-react-component';
import 'mapir-react-component/dist/index.css';

export default function AddButton({renderApp}) {
const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4ZTk2NzM3ZTE0ZGUwZGNhYmZiNGU1ZGRlOGFmOWU4ZTZiZjc5OTkyNjBmZmQwYTBmYmExOTY2MzE3MDZiNmY1ZDZjYjVhNGUxZDY0MjJmIn0.eyJhdWQiOiIyNzA2MyIsImp0aSI6IjY4ZTk2NzM3ZTE0ZGUwZGNhYmZiNGU1ZGRlOGFmOWU4ZTZiZjc5OTkyNjBmZmQwYTBmYmExOTY2MzE3MDZiNmY1ZDZjYjVhNGUxZDY0MjJmIiwiaWF0IjoxNzEzODA4NjI0LCJuYmYiOjE3MTM4MDg2MjQsImV4cCI6MTcxNjQwMDYyNCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Jq34zGQl-jeFXDhjWRVKuCxupf-07isjjanNU1LyBGgZxiWayfdHMbeR-pNZVzAnnJfWZEuzaO7eIm5VSUdXJbtNdOl1_G0DqT8_lAvc4q_HPZlUUN4QeeOxLpJ7hI8umWihJc81abgP3MomGZA2WB3eBsoXVjzN_0ai4s57RK5PNooljE3e5-_OxneOWdaMa7JdoRXNzlpjEqK_m82M7DcdA2Pjgrif-m3v1J0vhTp0qzDrca-wNGQAaWX1jMUgtzZyq0Ow2vu1AF-Rpqx6WgtftCW9P6ONwmMXrLyd-EK8G__MqxVTr6wlWDNIzMP4zmXsjPjcwaLzm-Y4nDQQfw"


  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [idCaption,setIdCaption] = useState(<Form.Text id="passwordHelpBlock" className='text-danger'>
                    کد ملی باید یک عدد ده رقمی باشد
                </Form.Text>);
  const [mapStatus,setMapStatus]= useState({zoom:[11],center:[51.42047, 35.729054],location:[51.42047, 35.729054]});
  const handleClose = () => setShow(false);

  const handleShow = () => {setShow(true);
                            setFirstName("");
                            setLastName("");
                            handleIdChange("")}
                               const Map = Mapir.setToken({
  transformRequest: (url) => {
    return {
      url: url,
      headers: {
        'x-api-key':apiKey,
        'Mapir-SDK': 'reactjs',
      },
    };
  },
});

  function submit(){
    handleClose()
    addPerson(id,firstName,lastName,mapStatus.location);
    console.log(giveList());
    renderApp()
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
          <Form as={Col}>
                <Form.Group controlId="formGridFirstName">
                <Form.Label>نام</Form.Label>
                <Form.Control size='sm' type="input" placeholder="نام را وارد کنید" onChange={evt=>setFirstName(evt.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formGridLastName">
                <Form.Label>نام خانوادگی</Form.Label>
                <Form.Control size='sm' type="input" placeholder="نام خانوادگی را وارد کنید" onChange={evt=>setLastName(evt.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formGridId">
                <Form.Label>کد ملی</Form.Label>
                <Form.Control size='sm' type="input" placeholder="کد ملی را وارد کنید" onChange={(evt)=>handleIdChange(evt.target.value)} />
                {idCaption}
                </Form.Group>
          </Form>
          <Form as={Col}>
          <Form.Label>محل زندگی را انتخاب کنید</Form.Label>
          <Mapir
          center={mapStatus.center}
          zoom={mapStatus.zoom}
          scrollZoom={false}
          hash={true}
          Map={Map}
          onClick={(map,evt)=>setMapStatus({zoom:[evt.target.transform._zoom],
                                            center:[evt.target.transform.center.lng,evt.target.transform.center.lat],
                                            location:[evt.lngLat.lng,evt.lngLat.lat]})}
          interactive={true}
        >
          <Mapir.Layer type="symbol" layout={{ "icon-image": "harbor-15" }} />

          <Mapir.Marker coordinates={mapStatus.location} anchor="bottom" />
        </Mapir>
        </Form>
        </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
          { !validId.test(id) ?
            <Button variant="primary" disabled>افزودن</Button>
            :
            <Button variant="primary" onClick={submit}>افزودن</Button>
            }
        </Modal.Footer>

      </Modal>
    </>
  );
}

