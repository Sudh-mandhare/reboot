import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ItemsTable from './ItemsTable';

export default function Accordian() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          >
          <Typography>Prof. Aiden D'souza: Please approve below mentioned expenses for upcoming department event: "Hands On Student Practicals".</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The "Hands On Student Practicals" event scheduled for the upcoming weekend will need an increase in certain components. With increase in the batch size as compared to last year, we will need computers to accomodate the increase in demand.
          </Typography>
          <ItemsTable />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Prof. Sudhanshu Mandhare: Please approve below mentioned expenses for lab expenses.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
