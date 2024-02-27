
import React from 'react';
import NavDean from '../DeanDesk/NavDean';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Approved from '../DeanDesk/Approved';
import FundsRemaining from '../FundsRemaining/FundsRemaining';
import RequestPending from '../DeanDesk/RequestPending'
import { Timeline } from '@mui/icons-material';


const director = () => {
  return (
    <div>
          <Router>
      <NavDean />
      <Routes>
        <Route path="/requests-approved" element={<Approved />} />
        <Route path="/request-pending" element={<RequestPending />} />
        <Route path="/timeline" element={<Timeline/>} />
        <Route path="/funds-remaining" element={<FundsRemaining />} />
      </Routes>
    </Router>
    </div>
  )
}

export default director
