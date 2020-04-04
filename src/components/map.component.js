// Same across all components
import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

// Same with different names across all components
export default class Map extends Component {
    /*





    // Seen from below, you have to bind the this keyword (fsr)
    this.onGetPointatDate = this.onGetPointatDate.bind(this)





    constructor(props){
        // Must call the SUPER when using a sub-class
        super(props)

        // Represents the fields in the JSON model
        // Using state is how you will make variables in React instead of saying: var point = "xyx"
        this.state = {
            accesspoint: []
        }





        // This is where you will add METHODS to update properties of the state
        // Examples

        // This is a "life cycle" method, this will automatically be called before the page renders the below HTML
        componentDidMount(){
            this.setState({
                accesspoint: ['test point']
            })
        }

        GetPointAtDate(e){
            axios.get('http://localhost:port#/accesspoint/get')
                .then(response => {
                    if(response.data.length > 0){
                        this.setState({
                            id: response.data.map(accesspoint => accesspoint.id)
                            longitude: response.data.map(accesspoint => accesspoint.longitude)
                            latitude: response.data.map(accesspoint => accesspoint.latitude)
                            time: response.data.map(accesspoint => accesspoint.time)
                        })
                    }
                })
        }

        PostPoint(e){
            axios.post ...
        }

        HidePointByDate(e){
            ...
        }

        ShowPointByDate(e){
            ...
        }
    */





    render() {
        return (
            <html>
                <header>
                </header>
                <body>
                    <div>Map</div>

                    // <slider
                    //    className="slider-main-slider"
                    //    onSlide = {this.ShowPointByDate}
                    // />
                </body>
            </html>
        )
    }
}
