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
import Slider from '@material-ui/core/Slider'

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

  const marks = [
    {
        value: 8,
        //label: '8:10:00',
    },
    {
        value: 8.1,
        //label: '8:10:00',
    },
    {
        value: 8.2,
        //label: '8:20:00',
    },
    {
        value: 8.3,
        //label: '8:30:00',
    },
    {
        value: 8.4,
        //label: '8:40:00',
    },
    {
        value: 8.5,
        //label: '8:50:00',
    },
    {
        value: 9,
        //label: '9:00:00',
    },
    {
        value: 9.1,
        //label: '9:10:00',
    },
    {
        value: 9.2,
        //label: '9:20:00',
    },
    {
        value: 9.3,
        //label: '9:30:00',
    },
    {
        value: 9.4,
        //label: '9:40:00',
    },
    {
        value: 9.5,
        //label: '9:50:00',
    },
    {
        value: 10,
        //label: '10:00:00',
    },
    {
        value: 10.1,
        //label: '10:10:00',
    },
    {
        value: 10.2,
        //label: '10:20:00',
    },
    {
        value: 10.3,
        //label: '10:30:00',
    },
    {
        value: 10.4,
        //label: '10:40:00',
    },
    {
        value: 10.5,
        //label: '10:50:00',
    },
    {
        value: 11,
        //label: '11:00:00',
    },
    {
        value: 11.1,
        //label: '11:10:00',
    },
    {
        value: 11.2,
        //label: '11:20:00',
    },
    {
        value: 11.3,
        //label: '11:30:00',
    },
    {
        value: 11.4,
        //label: '11:40:00',
    },
    {
        value: 11.5,
        //label: '11:50:00',
    },
    {
        value: 12,
        //label: '12:00:00',
    },
    {
        value: 12.1,
        //label: '12:10:00',
    },
    {
        value: 12.2,
        //label: '12:20:00',
    },
    {
        value: 12.3,
        //label: '12:30:00',
    },
    {
        value: 12.4,
        //label: '12:40:00',
    },
    {
        value: 12.5,
        //label: '12:50:00',
    },
    {
        value: 13,
        //label: '13:00:00',
    },
    {
        value: 13.1,
        //label: '13:10:00',
    },
    {
        value: 13.2,
        //label: '13:20:00',
    },
    {
        value: 13.3,
        //label: '13:30:00',
    },
    {
        value: 13.4,
        //label: '13:40:00',
    },
    {
        value: 13.5,
        //label: '13:50:00',
    },
    {
        value: 14,
        //label: '14:00:00',
    },
    {
        value: 14.1,
        //label: '14:10:00',
    },
    {
        value: 14.2,
        //label: '14:20:00',
    },
    {
        value: 14.3,
        //label: '14:30:00',
    },
    {
        value: 14.4,
        //label: '14:40:00',
    },
    {
        value: 14.5,
        //label: '14:50:00',
    },
    {
        value: 15,
        //label: '15:00:00',
    },
    {
        value: 15.1,
        //label: '15:10:00',
    },
    {
        value: 15.2,
        //label: '15:20:00',
    },
    {
        value: 15.3,
        //label: '15:30:00',
    },
    {
        value: 15.4,
        //label: '15:40:00',
    },
    {
        value: 15.5,
        //label: '15:50:00',
    },
    {
        value: 16,
        //label: '16:00:00',
    },
    {
        value: 16.1,
        //label: '16:10:00',
    },
    {
        value: 16.2,
        //label: '16:20:00',
    },
    {
        value: 16.3,
        //label: '16:30:00',
    },
    {
        value: 16.4,
        //label: '16:40:00',
    },
    {
        value: 16.5,
        //label: '16:50:00',
    },
    {
        value: 17,
        //label: '17:00:00',
    },
    {
        value: 17.1,
        //label: '17:10:00',
    },
    {
        value: 17.2,
        //label: '17:20:00',
    },
    {
        value: 17.3,
        //label: '17:30:00',
    },
    {
        value: 17.4,
        //label: '17:40:00',
    },
    {
        value: 17.5,
        //label: '17:50:00',
    },
    {
        value: 18,
        //label: '18:00:00',
    },
    {
        value: 18.1,
        //label: '18:10:00',
    },
    {
        value: 18.2,
        //label: '18:20:00',
    },
    {
        value: 18.3,
        //label: '18:30:00',
    },
    {
        value: 18.4,
        //label: '18:40:00',
    },
    {
        value: 18.5,
        //label: '18:50:00',
    },
    {
        value: 19,
        //label: '19:00:00',
    },
    {
        value: 19.1,
        //label: '19:10:00',
    },
    {
        value: 19.2,
        //label: '19:20:00',
    },
    {
        value: 19.3,
        //label: '19:30:00',
    },
    {
        value: 19.4,
       //label: '19:40:00',
    },
    {
        value: 19.5,
        //label: '19:50:00',
    },
    {
        value: 20,
        //label: '20:00:00',
    },
    {
        value: 20.1,
        //label: '20:10:00',
    },
    {
        value: 20.2,
        //label: '20:20:00',
    },
    {
        value: 20.3,
        //label: '20:30:00',
    },
    {
        value: 20.4,
        //label: '20:40:00',
    },
    {
        value: 20.5,
        //label: '20:50:00',
    },
    {
        value: 21,
       //label: '21:00:00',
    },
    {
        value: 21.1,
        //label: '21:10:00',
    },
    {
        value: 21.2,
        //label: '21:20:00',
    },
    {
        value: 21.3,
        //label: '21:30:00',
    },
    {
        value: 21.4,
        //label: '21:40:00',
    },
    {
        value: 21.5,
        //label: '21:50:00',
    },
    {
        value: 22,
        //label: '22:00:00',
    },
    {
        value: 22.1,
        //label: '22:10:00',
    },
    {
        value: 22.2,
        //label: '22:20:00',
    },
    {
        value: 22.3,
        //label: '22:30:00',
    },
    {
        value: 22.4,
        //label: '22:40:00',
    },
    {
        value: 22.5,
        //label: '22:50:00',
    },
    {
        value: 23,
        //label: '23:00:00',
    },
    {
        value: 23.1,
        //label: '23:10:00',
    },
    {
        value: 23.2,
        //label: '23:20:00',
    },
    {
        value: 23.3,
        //label: '23:30:00',
    },
    {
        value: 23.4,
        //label: '23:40:00',
    },
    {
        value: 23.5,
        //label: '23:50:00',
    },

  ]

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
    this.state = {layers: layers, time: "0"};
  }

  componentDidMount(){
    this.setState({
      time: '08:00:00'
    });
  }

  handleSliderChange = (event, newValue) => {
    var valueString;
  if(newValue < 10 && (newValue - Math.floor(newValue)=== 0)){  // 8 and 9
     valueString =  '0' + newValue.toString() + ':00:00';
  }
  else if(newValue - Math.floor(newValue)=== 0){
      valueString = newValue.toString() +':00:00'
  }
  else if(newValue < 10){
      valueString = '0' + newValue.toString() + '0:00';
  }
  else{
      valueString = newValue.toString() + '0:00';
  }
  valueString = valueString.replace('.',':');
  this.setState({
    time: valueString
  })
};

  /*handleTime = (timeValue) =>{
    this.setState({
      time: timeValue
      
    });
    // eslint-disable-next-line no-undef
    console.log('time is:' + time);
  }
  */
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
        
        <div id="tooltip" style={{ height: '100%' }}></div>

      </DeckGL>
        
        <Nav />
        <div id="sideBar">
           <Typography id="discrete-slider" gutterBottom>
             Time Slider {this.state.time}
      </Typography>
      <Slider
             defaultValue={8}
             // getAriaValueText={valuetext}
             aria-labelledby="discrete-slider"
             valueLabelDisplay="Auto"
             marks = {marks}
             step = {null}
             min ={8}
             max = {23.5}
             onChange = {this.handleSliderChange}
          />

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
