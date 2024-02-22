import { Box } from '@mui/material'
import React from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { TimeLine } from '../TimeLine';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const SubNavBar = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(3);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '30px', maxHeight: '30px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="standard" sx={{
        minHeight: '30px',
        height: '30px',
        
      }}>
          <Tab label="Update Job and MSR Data" {...a11yProps(0) } sx={{ height: '30px', minHeight: '30px', textTransform: 'inherit' }}/>
          <Tab label="Drop Down List Edition" {...a11yProps(1)} sx={{ height: '30px', minHeight: '30px', textTransform: 'inherit' }}/>
          <Tab label="Edit Tooltips" {...a11yProps(2)} sx={{ height: '30px', minHeight: '30px', textTransform: 'inherit' }}/>
          <Tab label="Timeline" {...a11yProps(3)} sx={{ height: '30px', minHeight: '30px', textTransform: 'inherit' }}/>
          <Tab label="Manage User Roles" {...a11yProps(5)} sx={{ height: '30px', minHeight: '30px', textTransform: 'inherit' }}/>
          <Tab label="Manage PX" {...a11yProps(6)} sx={{ height: '30px', minHeight: '30px', textTransform: 'inherit' }}/>
          <Tab label="Assignment" {...a11yProps(7)} sx={{ height: '30px', minHeight: '30px', textTransform: 'inherit' }}/>
          <Tab label="Manage Attachment" {...a11yProps(8)} sx={{ height: '30px', minHeight: '30px', textTransform: 'inherit' }}/>
        </Tabs>
      </Box>
      <SubNavBar value={value} index={0}>
        Update Job and MSR Data
      </SubNavBar>
      <SubNavBar value={value} index={1}>
        Drop Down List Edition
      </SubNavBar>
      <SubNavBar value={value} index={2}>
        Edit Tooltips
      </SubNavBar>
      <SubNavBar value={value} index={3} >
        <TimeLine />
      </SubNavBar>
      <SubNavBar value={value} index={4}>
        Manage User Roles
      </SubNavBar>
      <SubNavBar value={value} index={5}>
        Manage
      </SubNavBar>
      <SubNavBar value={value} index={6}>
        Assignment
      </SubNavBar>
      <SubNavBar value={value} index={7}>
        Manage Attachment
      </SubNavBar>
    </Box>
  );
}




