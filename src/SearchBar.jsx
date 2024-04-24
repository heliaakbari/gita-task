import { Button ,Form,Accordion} from 'react-bootstrap';
import { useState } from 'react';

export default function SearchBar({setSearchInput}) {

  const [id,setId]= useState("")
  const [firstName,setFirstName]= useState("")
  const [lastName,setLastName]=useState("")

  function handleSearch(){
    setSearchInput({firstName:firstName,lastName:lastName,id:id});
  }

  return (
    <>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>جستجو</Accordion.Header>
        <Accordion.Body>
              <Form className="d-flex justifify-content-around gap-4 ">
        <Form.Group>
          <Form.Label>نام</Form.Label>
          <Form.Control onChange={(e)=>setFirstName(e.target.value)} defaultValue={firstName} type="input" placeholder="نام را وارد کنید" />
        </Form.Group>

        <Form.Group >
          <Form.Label>نام خانوادگی</Form.Label>
          <Form.Control onChange={(e)=>setLastName(e.target.value)} defaultValue={lastName} type="input" placeholder="نام خانوادگی را وارد کنید" />
        </Form.Group>

        <Form.Group controlId="formGridId">
        <Form.Label>کد ملی</Form.Label>
        <Form.Control onChange={(e)=>setId(e.target.value)} type="text" defaultValue={id} placeholder="کد ملی را وارد کنید" />
      </Form.Group>

        <div className="col-auto my-0  d-flex align-items-end ">
      <Button className="btn btn-primary" onClick={handleSearch}>جستجو</Button>
    </div>
    </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}