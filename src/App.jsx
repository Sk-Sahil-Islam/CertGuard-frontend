// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import VerifyForm from './components/VerifyForm';
// import VerifyResult from './components/VerifyResult';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" element={<VerifyForm />} />
//           <Route path="/verify" element={<VerifyResult />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerifyForm from './components/VerifyPage';
import VerifyResult from './components/VerifyResult';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<VerifyForm />} />
          <Route path="/verify/result" element={<VerifyResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
