import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  return (
    <div className="flex justify-center">
      <div className='center'>
        <h1 className="charthead1">Department wise expenditure</h1>
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['ECE', 'CSE', 'EEE', 'META','CIVIL','MINN','MEC','CHEM'] }]}
          series={[{ data: [10000000, 6000000, 2000000,3000000,2000000,1000000,1000000,4000000] }, { data: [5000000,200000,300000,100000, 690000, 200000,300000,2000000]}]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
