import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavStore from './NavStore';
import ReqApproved from './ReqApproved';
import DenDesk from './DenDesk';
import Vendorcontact from './Vendorcontact';
import VendorSelected from './VendorSelected';

const StoreSec = () => {
  return (
    <Router>
      <div>
        <NavStore />
        <Routes>
          <Route path="/req-approved" element={<ReqApproved />} />
          <Route path="/dean-desk" element={<DenDesk />} />
          
          <Route path="/vendor-contact" element={<Vendorcontact />} />
          <Route path="/vendor-selected" element={<VendorSelected />} />
        </Routes>
      </div>
    </Router>
  );
}

export default StoreSec;
