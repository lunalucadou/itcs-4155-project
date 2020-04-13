import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { ScatterplotLayer } from '@deck.gl/layers';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import DeckGL from '@deck.gl/react';
import mapStyles from "../mapStyles";

//const demoData = './demodata.json';

// var UNCC_BOUNDS = {
//     north: 35.313129124037836,
//     south: 35.300626324161854,
//     west: -80.74685096740724,
//     east: -80.7214879989624,
//   };

const Map = withScriptjs(withGoogleMap((props) => 
    
    <GoogleMap
        // ref={props => props && props.fitBounds(UNCC_BOUNDS)}
        defaultZoom={17}
        defaultCenter={{lat:35.306247569901494, lng:-80.7333755493164}}
        defaultOptions={{styles: mapStyles}}

        
        >
    {props.isMarkerShown && <Marker position={{lat:35.305704, lng:-80.732347}} />}
    </GoogleMap>
    ));     


export default Map;