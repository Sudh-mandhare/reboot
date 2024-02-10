import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>ELECTRONIC AND COMMUNICATION DEPARTMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           one year expenditure details list and current fund left
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>COMPUTER SCIENCE DEPARTMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          one year expenditure details list and current fund left
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>ELECTRICAL AND ELECTRONICS DEPARTMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
          </Typography>one year expenditure details list and current fund left
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>METALLURGY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          one year expenditure details list and current fund left
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>CIVIL DEPARTMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          one year expenditure details list and current fund left
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>MINNING DEPARTMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          one year expenditure details list and current fund left
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>MECHANICAL DEPARTMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          one year expenditure details list and current fund left
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>CHEMICAL DEPARTMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          one year expenditure details list and current fund left
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}