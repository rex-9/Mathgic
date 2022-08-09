import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Nav from './components/Nav';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </>
);

export default App;
