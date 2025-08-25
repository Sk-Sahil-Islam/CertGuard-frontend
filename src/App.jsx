import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerifyPage from './components/VerifyPage';
import VerifyResult from './components/VerifyResult';
import Home from './components/Home'; // optional landing page
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />               {/* Landing page */}
          <Route path="/form" element={<VerifyPage />} />     {/* Optional separate form page */}
          <Route path="/verify" element={<VerifyResult />} /> {/* QR code result page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
