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


    render() {
        return (
            <div>
                <p>Insert HTML and JavaScript here!</p>
            </div>
        )
    }
}
