// Same across all components
import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

// Same with different names across all components
export default class Map extends Component {
    /*





    // Seen from below, you have to bind the 'this' keywords to all of the methods that use it
    this.GetAllPoints = this.GetAllPoints.bind(this)
    this.ShowPointByDate = this.ShowPointByDate.bind(this)
    this.HidePointByDate = this.HidePointByDate.bind(this)
    this.PostPoint = this.PostPoint.bind(this)




    constructor(props){
        // Must call the SUPER when using a sub-class
        super(props)

        // This represents class properties, which will be used/rendered in the below HTML/JSX
        // Using state is how you will make variables in React instead of saying: var point = "xyx"
        this.state = {
            accesspoint: []
        }





        // This is where you will add METHODS to update properties of the state
        // Examples

        // This is a "life cycle" method, this will automatically be called before the page renders the below HTML
        componentDidMount(){
            // If we want to test before loading from database
            this.setState({
                accesspoint: ['test point']
            })

            // If we want to try to load from database
            GetAllPoints()
        }

        GetAllPoints(e){
            axios.get('http://localhost:3000/accesspoint/get')
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

        HidePointByDate(e){
            ...
        }

        ShowPointByDate(e){
            ...
        }

        PostPoint(e){
            axios.post ...
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
