import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage';

function App() {
  return (
   <>
    <Router>
      <LandingPage />
        <Routes>
          <Route path='/LandingPage' exact element={LandingPage} />
        </Routes>
    </Router>
   </>
  );
}

export default App;