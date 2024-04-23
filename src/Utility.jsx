import { Form } from "react-bootstrap";
export const validId = new RegExp(
   '^[0-9]{10}$' 
);

export const mapApiKey ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4ZTk2NzM3ZTE0ZGUwZGNhYmZiNGU1ZGRlOGFmOWU4ZTZiZjc5OTkyNjBmZmQwYTBmYmExOTY2MzE3MDZiNmY1ZDZjYjVhNGUxZDY0MjJmIn0.eyJhdWQiOiIyNzA2MyIsImp0aSI6IjY4ZTk2NzM3ZTE0ZGUwZGNhYmZiNGU1ZGRlOGFmOWU4ZTZiZjc5OTkyNjBmZmQwYTBmYmExOTY2MzE3MDZiNmY1ZDZjYjVhNGUxZDY0MjJmIiwiaWF0IjoxNzEzODA4NjI0LCJuYmYiOjE3MTM4MDg2MjQsImV4cCI6MTcxNjQwMDYyNCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Jq34zGQl-jeFXDhjWRVKuCxupf-07isjjanNU1LyBGgZxiWayfdHMbeR-pNZVzAnnJfWZEuzaO7eIm5VSUdXJbtNdOl1_G0DqT8_lAvc4q_HPZlUUN4QeeOxLpJ7hI8umWihJc81abgP3MomGZA2WB3eBsoXVjzN_0ai4s57RK5PNooljE3e5-_OxneOWdaMa7JdoRXNzlpjEqK_m82M7DcdA2Pjgrif-m3v1J0vhTp0qzDrca-wNGQAaWX1jMUgtzZyq0Ow2vu1AF-Rpqx6WgtftCW9P6ONwmMXrLyd-EK8G__MqxVTr6wlWDNIzMP4zmXsjPjcwaLzm-Y4nDQQfw"

export const defaultLocation = [51.42047, 35.729054]

export function idCaptioner(idValue){
   if(validId.test(idValue)){
      return <Form.Text className='text-success'>
                    کد ملی قابل قبول است
                </Form.Text>
   }
   else{
      return <Form.Text className='text-danger'>
                    کد ملی باید یک عدد ده رقمی انگلیسی باشد
                </Form.Text>
   }
}