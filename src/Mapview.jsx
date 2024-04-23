import Mapir from 'mapir-react-component';
import 'mapir-react-component/dist/index.css';
import { useState } from 'react';
import { mapApiKey as apiKey ,defaultLocation} from './Utility';

export default function Mapview({editable, location=defaultLocation, locationRef={current:defaultLocation}}){

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