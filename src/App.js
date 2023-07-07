import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import ShoppingCart from './components/ShoppingCart';
import WeatherDisplay from './components/WeatherDisplay';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
const App = () => {
  return (
    <Router>
      <div className='app'>
        <nav>
          <ul>
            <li>
              <Link  className='link' to="/">Home</Link>
            </li>
            <li>
              <Link className='link' to="/about">About</Link>
            </li>
            <li>
              <Link className='link' to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <section>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </section>
      </div>
      <TodoList /> 
      <ShoppingCart />
       <WeatherDisplay /> 
    </Router>
  );
};

export default App;
