import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import AccessPoints from "./components/accesspoints.component.js"

function App() {
  return (
    <Router>
    <Route path="/" exact component={AccessPoints} />
    </Router>
  );
}

export default App;
