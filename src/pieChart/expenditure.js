import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Detailinfo from '../pieChart/detailinfo'
const data = [
  { id: 0, value: 1000000, label: 'Total Budget' },
  { id: 1, value: 96000, label: 'EXpenditure' },
];

export default function PieActiveArc() {
  return (<>
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
    <Detailinfo/>
    </>
  );
}