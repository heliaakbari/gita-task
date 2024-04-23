
import {Col,Form} from 'react-bootstrap';
import { idCaptioner } from './Utility';
import { useState } from 'react';

export default function PersonelForm({firstNameRef,lastNameRef,idRef}){
  const [id, setId] = useState(idRef.current);

  const [idCaption,setIdCaption] = useState(idCaptioner(id));

  function handleIdChange(newId){
    setId(newId)
    setIdCaption(idCaptioner(newId))
  }

    return(
          <Form as={Col}>
                <Form.Group>
                <Form.Label>نام</Form.Label>
                <Form.Control size='sm' type="input" placeholder="نام را وارد کنید" onChange={e=>firstNameRef.current=e.target.value}/>
                </Form.Group>

                <Form.Group>
                <Form.Label>نام خانوادگی</Form.Label>
                <Form.Control size='sm' type="input" placeholder="نام خانوادگی را وارد کنید" onChange={e=>lastNameRef.current=e.target.value}/>
                </Form.Group>
                <Form.Group>
                <Form.Label>کد ملی</Form.Label>
                <Form.Control size='sm' type="text" placeholder="کد ملی را وارد کنید" onChange={e=>{idRef.current=e.target.value; handleIdChange(e.target.value)}} />
                {idCaptioner(id)}
                </Form.Group>
            </Form>
    )
}