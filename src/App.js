/* eslint-disable max-len */
import { React } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Footer from './components/footer';
import './App.css';
import './components/header.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <main id="main">
      <div className="header">
        <h1>Math Magicians</h1>
        <nav className="navItems">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/Calculator">Calculator</Link>
          <Link className="item" to="/Quote">Quote</Link>
        </nav>
      </div>
      <div className="description">
        <h2> Welcome to our page! </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi, reprehenderit cum quod iste eius nobis vero culpa voluptates
          velit consectetur delectus voluptatem dolorum vel eligendi nisi.
          Possimus, consectetur voluptate nesciunt qui sunt quo nam tempora
          expedita vero accusamus libero ea veniam doloribus distinctio hic minima
          <br />
          beatae nisi molestiae laboriosam! Velit, eius similique! Quisquam consequatur a
          impedit voluptatibus aperiam quae hic eum ex, harum molestiae molestias tenetur
          excepturi nesciunt culpa in esse sunt quas distinctio mollitia vero reprehenderit
          consequuntur alias explicabo? Ex rem officia dicta illo esse ullam natus! Commodi
          accusantium rerum corporis expedita esse libero eius culpa doloremque, ab molestiae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi, reprehenderit cum quod iste eius nobis vero culpa voluptates
          velit consectetur delectus voluptatem dolorum vel eligendi nisi.
          Possimus, consectetur voluptate nesciunt qui sunt quo nam tempora
          expedita vero accusamus libero ea veniam doloribus distinctio hic minima
          <br />
          beatae nisi molestiae laboriosam! Velit, eius similique! Quisquam consequatur a
          impedit voluptatibus aperiam quae hic eum ex, harum molestiae molestias tenetur
          excepturi nesciunt culpa in esse sunt quas distinctio mollitia vero reprehenderit
          consequuntur alias explicabo? Ex rem officia dicta illo esse ullam natus! Commodi
          accusantium rerum corporis expedita esse libero eius culpa doloremque, ab molestiae?
        </p>
      </div>
      <Footer />
    </main>
  );
}

function Quote() {
  return (
    <main>
      <div className="header">
        <h1>Math Magicians</h1>
        <nav className="navItems">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/Calculator">Calculator</Link>
          <Link className="item" to="/Quote">Quote</Link>
        </nav>
      </div>
      <div className="quotes">
        <p>Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. - William Paul Thurston</p>
      </div>
      <Footer />
    </main>
  );
}
