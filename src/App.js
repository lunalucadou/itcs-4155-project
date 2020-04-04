import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Map from "./components/map.component.js"

function App() {
  return (
    <Router>
    <Route path="/" exact component={Map} />
    <Route path="/accesspoint" component={Map} />
    <Route path="/accesspoint/get" component={Map} />
    <Route path="/accesspoint/add" component={Map} />
    </Router>
  );
}

export default App;
