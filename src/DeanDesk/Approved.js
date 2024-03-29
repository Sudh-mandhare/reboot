import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>COMPUTER SCIENCE & ENGINEERING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>ELECTRONICS COMMUNICATION ENGINEERING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>ELECTRICAL & ELECTRONICS ENGINEERING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>MECHANICAL ENGINEERING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>CIVIL ENGINEERING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>CHEMICAL ENGINEERING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>METALLURGY AND MATERIAL SCIENCE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>MINING ENGINEERING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>ARCHITECTURE & PLANNING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography>BASIC ENGINEERING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Professor Singh is requesting computer software licenses in a quantity of 5 units. The total budget allocated for this request is ₹10,000.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}