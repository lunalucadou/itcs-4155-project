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
    constructor(props){
        // Must call the super when using a sub-class
        super(props)

        // Represents the fields in the JSON model
        // Using state is how you will make variables in React instead of saying let point = "xyx"
        this.state = {
            id: '';
            latitude: '',
            logitude: '',
            time: = new Date()
        }

        // This is where you will add methods to update properties of the state
        // Irrelavent example
        onGetPointatDate(e){
            this.setState({
                if(time > x){
                    render...
                }
            })
        }

        
    */


    render() {
        return (
            <div>
                <p>Insert HTML and JavaScript here!</p>
            </div>
        )
    }
}
