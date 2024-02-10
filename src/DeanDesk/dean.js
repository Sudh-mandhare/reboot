// Dean.js
import React from 'react';
import NavDean from './NavDean';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Approved from './Approved';
import FundsRemaining from '../FundsRemaining/FundsRemaining.js';
import RequestPending from './RequestPending';
import RequestProgress from './RequestProgress';

const Dean = () => {
  return (
    <Router>
      <NavDean />
      <Routes>
        <Route path="/requests-approved" element={<Approved />} />
        <Route path="/request-pending" element={<RequestPending />} />
        <Route path="/request-progress" element={<RequestProgress />} />
        <Route path="/funds-remaining" element={<FundsRemaining />} />
      </Routes>
    </Router>
  );
};

export default Dean;
