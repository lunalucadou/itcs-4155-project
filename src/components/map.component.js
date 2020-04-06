import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';


const Map = withScriptjs(withGoogleMap((props) => 
    
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat:35.305704, lng:-80.732347}}
        >
    {props.isMarkerShown && <Marker position={{lat:35.305704, lng:-80.732347}} />}
    </GoogleMap>
    ));     


export default Map;