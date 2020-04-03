// Same across all components
import React, { Component } from 'react';
// If there are routes
import { Link } from 'react-router-dom'

// Same with different names across all components
export default class AccessPoints extends Component {


    // Up here is where you will get the information from mongoose to use in the component
    // You will need to see how and what to call in order to get the information from the /get route, or else ...
    // ... what was the point of making the route? Surely, it must be used here or else where, though if else where ...
    // ... I don't know where that would be
    /*

    // Seen from below, you have to bind the this keyword fsr
    this.onGetPointatDate = this.onGetPointatDate.bind(this)


    constructor(props){
        // Must call the super when using a sub-class
        super(props)

        // Represents the fields in the JSON model
        // Using state is how you will make variables in React instead of saying: let point = "xyx"
        this.state = {
            id: '';
            latitude: '',
            logitude: '',
            time: = new Date()
        }

        // This is where you will add methods to update properties of the state
        // Irrelavent example
        onGetPointatDate(e){
            // See above for 'this'
            this.setState({
                if(time > x){
                    render...
                }
            })
        }
    */


    render() {
        return (
            // <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <title>Wifi access points</title>
                <link rel="stylesheet" href="bootstrap.css">
                <link rel="stylesheet" href="styles.css">
                <script src="jquery.js"></script>
                <script src="bootstrap.js"></script>

                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAd9QmAlAU1pJXF-IiirCbs9V5h9tuTZGk&callback=initMap"
                    async defer></script>

                    <script>

                        var map;

                    function initMap() {
                        //center the map on uptown Charlotte, NC
                        var Center = {
                            lat: 35.221814,
                            lng: -80.838929
                        }
                        //the map opject centered on Charlotte
                        map = new google.maps.Map(document.getElementById("map"), {
                            zoom: 10,
                            center: Center
                        });


                    }
                </script>



            </head>

            <body>
                <div className="wrapper">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                            </ul>
                            <span className="navbar-text">

                                <a href="/" className="middleNavlink">Login</a>

                                <a href="/">Signup</a>

                            </span>
                        </div>
                    </nav>


                    <div className=" container-vp vertical-center ">
                        <div className=" vertical-center contentArea">
                            <div className="col "></div> <!-- Spacer -->

                            <div className="col ">
                                <!-- MAP HERE -->
                                <div id="map"></div>

                                <div className="slidecontainer">
                                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange">
                                  </div>

                            </div>
                            <div className="col "></div> <!-- Spacer -->
                        </div>
                    </div>


                </div>




                <footer className="container-fluid text-center">
                    <div className="row">
                        <div className="col-sm-4">

                        </div>

                        <div className="col-sm-4">


                            <a href="https://rileyjanik.com/">© 2020 Team 14</a>
                        </div>

                        <div className="col-sm-4">
                            Contact us with questions

                        </div>
                    </div>
                </footer>



            </body>

            <!-- </body> -->

            </html>

        )
    }
}
