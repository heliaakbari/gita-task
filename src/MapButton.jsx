import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {Modal} from 'react-bootstrap';
import Mapir from 'mapir-react-component';
import 'mapir-react-component/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

export default function MapButton({renderApp,location}) {
const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4ZTk2NzM3ZTE0ZGUwZGNhYmZiNGU1ZGRlOGFmOWU4ZTZiZjc5OTkyNjBmZmQwYTBmYmExOTY2MzE3MDZiNmY1ZDZjYjVhNGUxZDY0MjJmIn0.eyJhdWQiOiIyNzA2MyIsImp0aSI6IjY4ZTk2NzM3ZTE0ZGUwZGNhYmZiNGU1ZGRlOGFmOWU4ZTZiZjc5OTkyNjBmZmQwYTBmYmExOTY2MzE3MDZiNmY1ZDZjYjVhNGUxZDY0MjJmIiwiaWF0IjoxNzEzODA4NjI0LCJuYmYiOjE3MTM4MDg2MjQsImV4cCI6MTcxNjQwMDYyNCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Jq34zGQl-jeFXDhjWRVKuCxupf-07isjjanNU1LyBGgZxiWayfdHMbeR-pNZVzAnnJfWZEuzaO7eIm5VSUdXJbtNdOl1_G0DqT8_lAvc4q_HPZlUUN4QeeOxLpJ7hI8umWihJc81abgP3MomGZA2WB3eBsoXVjzN_0ai4s57RK5PNooljE3e5-_OxneOWdaMa7JdoRXNzlpjEqK_m82M7DcdA2Pjgrif-m3v1J0vhTp0qzDrca-wNGQAaWX1jMUgtzZyq0Ow2vu1AF-Rpqx6WgtftCW9P6ONwmMXrLyd-EK8G__MqxVTr6wlWDNIzMP4zmXsjPjcwaLzm-Y4nDQQfw"

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  return (
    <>
      <Button variant="primary" className='my-3 btn-sm' onClick={handleShow}><FontAwesomeIcon icon={faLocationDot} /></Button>

      <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="my-modal"
      >

        <Modal.Header>
          <Modal.Title>محل زندگی</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Mapir
          center={location}
          minZoom={[13]}
          scrollZoom={false}
          hash={true}
          Map={Map}
          interactive={true}
        >
          <Mapir.Layer type="symbol" layout={{ "icon-image": "harbor-15" }} />

          <Mapir.Marker coordinates={location} anchor="bottom" />
        </Mapir>
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

