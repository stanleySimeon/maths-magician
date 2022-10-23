/* eslint-disable react/prefer-stateless-function */
import { React, Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WOW from 'wowjs';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Footer from './components/Footer';
import './index.css';

export default class App extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    return (
      <div className="App relative">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
