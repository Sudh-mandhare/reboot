//import logo from './logo.svg';
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Form from './components/Form.jsx';
import Accordian from './Accordian.js';
import ResponsiveAppBar from './NavProf.js';
import StoreSection from './storeSection.js';
import Notification from './Notification.js';
//import FundsRemaining from '../FundsRemaining/FundsRemaining.js';
//import Timedate from './timedate.js';
//import Timeline from '../hodDesk/timeline/timeline.js';
import Word from './Woord.js';
import PieActiveArc from '../pieChart/expenditure.js';
function Prof() {
  return (
    <>

    <Router>
      <ResponsiveAppBar/>
      <div>
        <Routes>

          <Route path="/store-section" element ={<StoreSection />}/>        
          <Route path="/notifications" element ={<Notification/>}/>
          <Route path="/funds-remaining" element={<PieActiveArc/>}/>
          <Route path="/add-update-item" element={<Accordian />} />
          <Route path="/forms" element={<Word />} />
          
         
        </Routes>
      </div>
    </Router>
    </>//notifications
    
    
  );
}

export default Prof;