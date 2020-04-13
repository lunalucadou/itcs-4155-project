import React, { Component } from 'react';

class SideBar extends Component {
    render() {
       return  <div id="sideBar">
       <div class="form">
           <div class="row">

               <div class="col">
                   <input type="date" class="date form-control" id="myDate" />
               </div>
               <div class="col">

                   <input type="time" class="time form-control" min="00:00:00" max="01:30:00" />
               </div>


           </div>
           

               <div class="slidecontainer">
                   {/* <!-- TODO: make slider adjust time entry box --> */}
                   <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />

               </div>

               <button type="button" id="toggleHex" class="btn btn-secondary">Toggle Hex Layer</button>
               <button type="button" id="toggleHeat" class="btn btn-secondary">Toggle Heatmap Layer</button>
           


       </div>
    </div>
    }
  }
  export default SideBar; 