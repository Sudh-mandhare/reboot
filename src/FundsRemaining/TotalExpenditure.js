import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  return (
    <div className="flex justify-center">
      <div className='center'>
        <h1 className="charthead1" style={{ fontSize: '24px' }}>Department wise expenditure</h1>

        <BarChart
          xAxis={[
            { 
              scaleType: 'band', 
              data: ['ECE', 'CSE', 'EEE', 'META', 'CIVIL', 'MINN', 'MEC', 'CHEM'], 
              label: 'Department' 
            }
          ]}
          series={[
            { 
              data: [10000000, 6000000, 2000000, 3000000, 2000000, 1000000, 1000000, 4000000], 
              name: 'Budget' 
            }, 
            { 
              data: [5000000, 200000, 300000, 100000, 690000, 200000, 300000, 2000000], 
              name: 'Expenditure' 
            }
          ]}
          width={800}
          height={500}
          margin={{ top: 60, right: 80, bottom: 60, left: 60 }}
          legend={{
            position: 'right',
            align: 'end',
            label: {
              fontWeight: 'bold',
            },
            spacing: 24,
          }}
        />
      </div>
    </div>
  );
}
