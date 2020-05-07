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
        getWeight: d => d.connections * 0.4,
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
      getElevationWeight: d => d.connections,
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
    getFillColor: d => d.connections > 0 ? [200, 0, 40, 150] : [255, 140, 0, 100],
    pickable: true,


    onHover: ({object, x, y}) => {
        const el = document.getElementById('tooltip');
        if (object) {
          el.innerHTML = `<h1>${object.building}</h1> <br> <h1>${object.connections} Users connected </h1>`
          el.style.display = 'block';
          el.style.opacity = 0.9;
          el.style.left = x + 'px';
          el.style.top = y + 'px';
        } else {
          el.style.opacity = 0.0;
        }
    },

    onClick: ({object, x, y}) => {
      //Do something
    },
  })

class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleHex = this.toggleHex.bind(this);
    layers.push(myHeatmapLayer, myHexagonLayer, myScatterplotLayer);
    this.state = {layers: layers, time: 0};
    // this.state = {time: 0};
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
  console.log('foobar');
  console.log(this.state.layers);
  layers = layers.splice(layers.indexOf(myHexagonLayer),1);
  // layers = layers.filter(id => id == "")

  console.log(layers);

// layers = [myHeatmapLayer,myScatterplotLayer];

// Use updating the layers variable instead of slicing the state to update instantly. QUESTION: can it go back to the way it was after initial toggle?

 }else{ //if the hex layer is not active
    //add the hex layer to the array of layers
    this.state.layers.push(myHexagonLayer);
 }

 this.setState({layers:layers});

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
 this.setState({layers:layers});
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
        
        <div id="tooltip"></div>

      </DeckGL>
        
        <Nav />
        <div id="sideBar">
           <Typography id="discrete-slider" gutterBottom>
             Time Slider
      </Typography>
      <CustomSlider/>

               <button type="button" onClick={() => this.toggleHex()} id="toggleHex" class="btn btn-secondary">Toggle Hex Layer</button>
               <button type="button" onClick={() => this.toggleHeat()} id="toggleHeat" class="btn btn-secondary">Toggle Heatmap Layer</button>
 </div>
    </div>

        
        <Footer />


      </Router>
    );

    
  }
  
}



export default App;
// export {toggleHex};
