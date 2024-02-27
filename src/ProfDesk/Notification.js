import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Word from './Woord';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Fund Request and Approvals from Deans
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Deans' Approval Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content related to fund requests and approvals from deans goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Fund Request and Approvals from HODs</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            HODs' Approval Status
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content related to fund requests and approvals from HODs goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Fund Request and Approvals from Director
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Director's Approval Status
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content related to fund requests and approvals from the director goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Word/>
    </div>
  );
}
