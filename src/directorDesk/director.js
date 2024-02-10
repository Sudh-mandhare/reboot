
import React from 'react';
import NavDean from '../DeanDesk/NavDean';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Approved from '../DeanDesk/Approved';
import FundsRemaining from '../FundsRemaining/FundsRemaining';
import RequestPending from '../DeanDesk/RequestPending'
import RequestProgress from '../DeanDesk/RequestProgress';

const director = () => {
  return (
    <div>
          <Router>
      <NavDean />
      <Routes>
        <Route path="/requests-approved" element={<Approved />} />
        <Route path="/request-pending" element={<RequestPending />} />
        <Route path="/request-progress" element={<RequestProgress />} />
        <Route path="/funds-remaining" element={<FundsRemaining />} />
      </Routes>
    </Router>
    </div>
  )
}

export default director
