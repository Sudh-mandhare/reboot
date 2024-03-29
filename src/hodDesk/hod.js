import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './navbar.js';
import FixedBottomNavigation from './bottomNav.js';
import AccordionUsage from './Accordian.js';
import Request from './request.js';
import RequestProcess from './requestProcess.js';
import Timeline from './timeline/timeline.js';
//import FundsRemaining from '../FundsRemaining/FundsRemaining.js';
import Word from '../ProfDesk/Woord.js';
//import { PieChart } from '@mui/icons-material';
import PieActiveArc from '../pieChart/expenditure.js'
const Hod = () => {
  return (
    <Router>
      <ResponsiveAppBar/>
      <div>
        <Routes>
          <Route path="/requests" element ={<Request/>}/>
          <Route path="/request-progress" element ={<RequestProcess/>}/>
          <Route path="/timeline" element ={<Timeline/>}/>
          <Route path="/funds-remaining" element={<PieActiveArc/>}/>
          <Route path="/bottom-navigation" element={<FixedBottomNavigation />} />
          <Route path="/accordion-usage" element={<AccordionUsage />} />
          <Route path="/accordion-usage" element={<Word />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Hod;