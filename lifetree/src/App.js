import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <div className='wrapper'>
          <Routes>
            <Route 
            path='/'
            element= { <Home /> } />

            <Route 
            path='/about'
            element= { <About /> } />
          </Routes>
        </div>
      </Router> 
    </div>
  );
}

export default App;
