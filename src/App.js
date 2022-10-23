import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="App bg-math-background h-screen">
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
