import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Map from "./components/map.component.js"
import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"


function App() {
  return (
    <Router>
      <div style = {{width: '100vw', height: '100vh'}}>
        <Map
            true
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </Router>
  );
}

export default App;
