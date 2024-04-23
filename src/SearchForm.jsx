import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

export default function SearchForm() {
    return (
    <Form >
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>نام</Form.Label>
          <Form.Control type="input" placeholder="نام را وارد کنید" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>نام خانوادگی</Form.Label>
          <Form.Control type="input" placeholder="نام خانوادگی را وارد کنید" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridId">
        <Form.Label>کد ملی</Form.Label>
        <Form.Control type="text" placeholder="کد ملی را وارد کنید" />
      </Form.Group>
        <div className="col-auto my-0  d-flex align-items-end ">
      <Button type="submit" className="btn btn-primary">جستجو</Button>
    </div>
      </Row>

      
    </Form>
  );
}

