import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
// import Map from "./components/map.component.js"
import Nav from "./components/nav.component.js"
import Footer from "./components/footer.component.js"
import Typography from '@material-ui/core/Typography';
import CustomSlider from './components/customSlider'

// import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"
// import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { ScatterplotLayer } from '@deck.gl/layers';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl';
const demoData = require('./demodata.json');
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicmphbmlrMSIsImEiOiJjazh3ZXgwcHMwanltM3RzZm1kYTJwbjk1In0.kERuiTj_jF-CSG6lqkGeNQ';


var layers = [];
var showHex = true;
var showHeat = true;
var showScatter = true;

var initialViewState = {
  longitude: -80.7333755493164,
  latitude: 35.306247569901494,
  zoom: 16,
  pitch: 0,
  bearing: 0
};

const myHeatmapLayer = new HeatmapLayer({
        id: 'heat',
        data: demoData,
        getPosition: d => [d.longitude, d.latitude],
        getWeight: d => d.n_connected * 0.4,
        radiusPixels: 60,
        visible: showHeat,

       
    updateTriggers: {
      visible: {showHeat}
    },
    })

const myHexagonLayer = new HexagonLayer({
      id: 'hex',
      data: demoData,
      getPosition: d => [d.longitude, d.latitude],
      getElevationWeight: d => d.n_connected,
      extruded: true,
      radius: 20,         
      opacity: 0.6,        
      coverage: 0.88,
      lowerPercentile: 50,
      visible: showHex

  })

const myScatterplotLayer = new ScatterplotLayer({
    id: 'scatter',
    data: demoData,
    opacity: 0.8,
    filled: true,
    radiusMinPixels: 20,
    radiusMaxPixels: 20,
    getPosition: d => [d.longitude, d.latitude],
    getFillColor: d => d.n_connected > 0 ? [200, 0, 40, 150] : [255, 140, 0, 100],
    pickable: true,
    visible: showScatter

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

class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleHex = this.toggleHex.bind(this);
    layers.push(myHeatmapLayer, myHexagonLayer, myScatterplotLayer);
    this.state = {layers: layers,
      time: 0
    };
  }

  componentDidMount(){
    this.setState({
      time: 8
    });
  }
    
  

  //function to turn the hex layer on and off
 toggleHex(){
    //if the hexagon layer is active
  if (this.state.layers.includes(myHexagonLayer)){
  //remove the hex layer from the array

  layers.splice(this.state.layers.indexOf(myHexagonLayer),1);
  showHeat = false;
  console.log(layers);
 }else{ //if the hex layer is not active
    //add the hex layer to the array of layers
    this.state.layers.push(myHexagonLayer);
 }
  }

  toggleHeat(){
    //if the Heatmap layer is active
  if (this.state.layers.includes(myHeatmapLayer)){
  //remove the Heat layer from the array
  layers.splice(this.state.layers.indexOf(myHeatmapLayer),1);
  console.log(layers);
 }else{ //if the Heat layer is not active
    //add the Heat layer to the array of layers
    this.state.layers.push(myHeatmapLayer);
 }
  }
  

  render() {    
 
    return (
      <Router>
      <div style = {{width: '100vw', height: '100vh'}}>
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        // layers={layers}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        
        <div id="tooltip" style={{ height: '100%' }}></div>

      </DeckGL>
        
        <Nav />
        <div id="sideBar">
       <div class="form">
         <div>this is the value of time: {this.state.time} </div>
         <div>Time</div>
           <div class="row">

               {/* <div class="col">
                   <input type="date" class="date form-control" id="myDate" />
               </div> */}
               <div class="col">

                   <input type="time" class="time form-control" min="08:00:00" max="23:59:00" />
               </div>


           </div>
           

           <Typography id="discrete-slider" gutterBottom>
             Time Slider
      </Typography>
      <CustomSlider
      />

               <button type="button" onClick={() => this.toggleHex()} id="toggleHex" class="btn btn-secondary">Toggle Hex Layer</button>
               <button type="button" onClick={() => this.toggleHeat()} id="toggleHeat" class="btn btn-secondary">Toggle Heatmap Layer</button>
 </div>
    </div>

        
      </div>
        <Footer />


      </Router>
    );

    
  }
  
}



export default App;
// export {toggleHex};
