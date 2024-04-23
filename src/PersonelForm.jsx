
import {Row,Col,Form} from 'react-bootstrap';
import { validId } from './Regex';
import { useState } from 'react';

export default function PersonelForm({firstNameRef,lastNameRef,idRef}){
  const [id, setId] = useState(idRef.current);

  const [idCaption,setIdCaption] = useState(<Form.Text id="passwordHelpBlock" className='text-danger'>
                    کد ملی باید یک عدد ده رقمی باشد
                </Form.Text>);

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
    return(
          <Form as={Col}>
                <Form.Group controlId="formGridFirstName">
                <Form.Label>نام</Form.Label>
                <Form.Control size='sm' type="input" placeholder="نام را وارد کنید" onChange={e=>firstNameRef.current=e.target.value}/>
                </Form.Group>

                <Form.Group controlId="formGridLastName">
                <Form.Label>نام خانوادگی</Form.Label>
                <Form.Control size='sm' type="input" placeholder="نام خانوادگی را وارد کنید" onChange={e=>lastNameRef.current=e.target.value}/>
                </Form.Group>
                <Form.Group controlId="formGridId">
                <Form.Label>کد ملی</Form.Label>
                <Form.Control size='sm' type="input" placeholder="کد ملی را وارد کنید" onChange={e=>{idRef.current=e.target.value; handleIdChange(e.target.value)}} />
                {idCaption}
                </Form.Group>
            </Form>
    )
}