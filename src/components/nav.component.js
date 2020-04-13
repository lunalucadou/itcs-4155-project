import React, { Component } from 'react';

class Nav extends Component {
    render() {
       return <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href="/">About</a>
                </li> */}
            </ul>
            <span class="navbar-text">

                {/* <a href="/" class="middleNavlink">Login</a>

                <a href="/">Signup</a> */}

            </span>
        </div>
    </nav>
    }
  }
  export default Nav; 