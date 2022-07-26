import React from 'react';
import Navigation from './Navigation';
import About from './About';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Lifetree</h1>
      <Navigation />

      {/* Components for routing using React Router */}
      <Router>
        <Routes>
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
