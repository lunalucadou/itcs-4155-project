import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import Map from "./components/map.component.js"
import Nav from "./components/nav.component.js"
import SideBar from "./components/sidebar.component.js"
import Footer from "./components/footer.component.js"



import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { ScatterplotLayer } from '@deck.gl/layers';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl';
const demoData = require('./demodata.json');
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicmphbmlrMSIsImEiOiJjazh3ZXgwcHMwanltM3RzZm1kYTJwbjk1In0.kERuiTj_jF-CSG6lqkGeNQ';

const initialViewState = {
  longitude: -80.7333755493164,
  latitude: 35.306247569901494,
  zoom: 16,
  pitch: 0,
  bearing: 0
};

class App extends React.Component {
  render() {
    
    const layers = [
      new HeatmapLayer({
        id: 'heat',
        data: demoData,
        getPosition: d => [d.longitude, d.latitude],
        getWeight: d => d.n_connected * 0.4,
        radiusPixels: 60,
       
    }),

    new HexagonLayer({
      id: 'hex',
      data: demoData,
      getPosition: d => [d.longitude, d.latitude],
      getElevationWeight: d => d.n_connected,
      extruded: true,
      radius: 20,         
      opacity: 0.6,        
      coverage: 0.88,
      lowerPercentile: 50,
  }),

  new ScatterplotLayer({
    id: 'scatter',
    data: demoData,
    opacity: 0.8,
    filled: true,
    radiusMinPixels: 20,
    radiusMaxPixels: 20,
    getPosition: d => [d.longitude, d.latitude],
    getFillColor: d => d.n_connected > 0 ? [200, 0, 40, 150] : [255, 140, 0, 100],
    
    

    pickable: true,
    // onHover: ({object, x, y}) => {
    //     const el = document.getElementById('tooltip');
    //     if (object) {
    //       const { n_connected } = object;
    //       el.innerHTML = `<h1>${n_connected} Users connected </h1>`
    //       el.style.display = 'block';
    //       el.style.opacity = 0.9;
    //       el.style.left = x + 'px';
    //       el.style.top = y + 'px';
    //     } else {
    //       el.style.opacity = 0.0;
    //     }
    // },

    // onClick: ({object, x, y}) => {
    //   //Do something
    // },
     
  })

    ];

    return (
      <Router>
      <div style = {{width: '100vw', height: '100vh'}}>
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        
        <Nav />
        <SideBar />
        
        

          
          

        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        
        <div id="tooltip" style={{ height: '100%' }}></div>

      </DeckGL>
      </div>
        <Footer />
      
      

      </Router>
    );
  }
}

// function App() {
//   return (
//     <Router>
//       <div style = {{width: '100vw', height: '100vh'}}>
//         <Map
//             true
//             googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
//             loadingElement={<div style={{ height: `100%` }} />}
//             containerElement={<div style={{ height: `100%` }} />}
//             mapElement={<div style={{ height: `100%` }} />}
//         />


//       </div>
//     </Router>
//   );
// }

export default App;
