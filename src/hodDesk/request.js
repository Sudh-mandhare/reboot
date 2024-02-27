import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        
        <AccordionDetails className='bold'>
          Welcome to HOD Login Kindly Approve the Follwing requests

        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Request 1
        </AccordionSummary>
        <AccordionDetails>
        Professor Sharma is requesting microscopes in a quantity of 10 units. The total budget allocated for this request is ₹50,000.
        </AccordionDetails>
        <AccordionActions>
          <Button>Approve</Button>
          <Button>Apply for Dean</Button>
         
          <Button>Reject</Button>
          <br/>
          <input type='text' placeholder='Enter suggestions' className='w-500 h-12'></input>
        </AccordionActions>
        
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Request 2
        </AccordionSummary>
        <AccordionDetails>
        Professor Patel is requesting laboratory glassware in a quantity of 20 units. The total budget allocated for this request is ₹25,000.
        </AccordionDetails>
        <AccordionActions>
          <Button>Approve</Button>
          <Button>Apply for Dean</Button>
          <Button>Reject</Button>
          <input type='text' placeholder='Enter suggestions' className='w-500 h-12'></input>
        </AccordionActions>
        
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Request 3
        </AccordionSummary>
        <AccordionDetails>
        Professor Gupta is requesting textbooks in a quantity of 30 units. The total budget allocated for this request is ₹30,000.
        </AccordionDetails>
        <AccordionActions>
          <Button>Approve</Button>
          <Button>Apply for Dean</Button>
          <Button>Reject</Button>
          <input type='text' placeholder='Enter suggestions' className='w-500 h-12'></input>
        </AccordionActions>
        
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Request 4
        </AccordionSummary>
        <AccordionDetails>
        Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
        </AccordionDetails>
        <AccordionActions>
          <Button>Approve</Button>
          <Button>Apply for Dean</Button>
          <Button>Reject</Button>
          <input type='text' placeholder='Enter suggestions' className='w-500 h-12'></input>
        </AccordionActions>
        
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Request 5
        </AccordionSummary>
        <AccordionDetails>
        Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
        </AccordionDetails>
        <AccordionActions>
          <Button>Approve</Button>
          <Button>Apply for Dean</Button>
          <Button>Reject</Button>
          <input type='text' placeholder='Enter suggestions' className='w-500 h-12'></input>
        </AccordionActions>
        
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Request 4
        </AccordionSummary>
        <AccordionDetails>
        Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
        </AccordionDetails>
        <AccordionActions>
          <Button>Approve</Button>
          <Button>Apply for Dean</Button>
          <Button>Reject</Button>
          <input type='text' placeholder='Enter suggestions' className='w-500 h-12'></input>
        </AccordionActions>
        
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Request 7
        </AccordionSummary>
        <AccordionDetails>
        Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
        </AccordionDetails>
        <AccordionActions>
          <Button>Approve</Button>
          <Button>Apply for Dean</Button>
          <Button>Reject</Button>
          <input type='text' placeholder='Enter suggestions' className='w-500 h-12'></input>
        </AccordionActions>
        
      </Accordion>
      
      
      
    </div>
  );
}