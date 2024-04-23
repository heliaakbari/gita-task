import Mapir from 'mapir-react-component';
import 'mapir-react-component/dist/index.css';
import { useState } from 'react';

export default function Mapview({location=[51.42047, 35.729054],editable,locationRef={current:[51.42047, 35.729054]}}){
const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4ZTk2NzM3ZTE0ZGUwZGNhYmZiNGU1ZGRlOGFmOWU4ZTZiZjc5OTkyNjBmZmQwYTBmYmExOTY2MzE3MDZiNmY1ZDZjYjVhNGUxZDY0MjJmIn0.eyJhdWQiOiIyNzA2MyIsImp0aSI6IjY4ZTk2NzM3ZTE0ZGUwZGNhYmZiNGU1ZGRlOGFmOWU4ZTZiZjc5OTkyNjBmZmQwYTBmYmExOTY2MzE3MDZiNmY1ZDZjYjVhNGUxZDY0MjJmIiwiaWF0IjoxNzEzODA4NjI0LCJuYmYiOjE3MTM4MDg2MjQsImV4cCI6MTcxNjQwMDYyNCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Jq34zGQl-jeFXDhjWRVKuCxupf-07isjjanNU1LyBGgZxiWayfdHMbeR-pNZVzAnnJfWZEuzaO7eIm5VSUdXJbtNdOl1_G0DqT8_lAvc4q_HPZlUUN4QeeOxLpJ7hI8umWihJc81abgP3MomGZA2WB3eBsoXVjzN_0ai4s57RK5PNooljE3e5-_OxneOWdaMa7JdoRXNzlpjEqK_m82M7DcdA2Pjgrif-m3v1J0vhTp0qzDrca-wNGQAaWX1jMUgtzZyq0Ow2vu1AF-Rpqx6WgtftCW9P6ONwmMXrLyd-EK8G__MqxVTr6wlWDNIzMP4zmXsjPjcwaLzm-Y4nDQQfw"
  const [mapStatus,setMapStatus]= useState({zoom:[11],center:location,location:location});
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
    function updateStatus(map,evt){
        setMapStatus(
            {zoom:[evt.target.transform._zoom],
            center:[evt.target.transform.center.lng,evt.target.transform.center.lat],
            location: [evt.lngLat.lng,evt.lngLat.lat]}
        )
        if (editable){
        locationRef.current = [evt.lngLat.lng,evt.lngLat.lat]
        }
    }

    return(
        <Mapir
          center={mapStatus.center}
          minZoom={mapStatus.zoom}
          scrollZoom={false}
          hash={true}
          Map={Map}
          interactive={true}
          onClick={editable ? (map,evt)=>updateStatus(map,evt) : null}
        >
          <Mapir.Layer type="symbol" layout={{ "icon-image": "harbor-15" }} />

          <Mapir.Marker coordinates={mapStatus.location} anchor="bottom" />
        </Mapir>
    );

}