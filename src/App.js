import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import './App.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

import MovieDBLogo from './assets/movie-db-header-logo.png'
// import MoviesVideo from './assets/movies-intro.mp4'

// import icons, and tools for react router, redux adn store
import { connect } from "react-redux"

import MdMovie from 'react-icons/lib/md/movie'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
            <img style={{ position: 'absolute', top: 8, right: 8 }} src={MovieDBLogo} alt='movie-db-logo' width={'5%'} />

            <header className="App-header">
              <h1 className="App-title">Movies App <MdMovie /></h1>
          </header>

          <div>

          </div>


          <div className="header-scroll-indicator">
            <div>Scroll to explore</div>
            <div className="scroll-indicator-line" />
          </div>
        </div>

        <NavigationBar />
      </div>
    );
  }
}

export default connect()(App);
