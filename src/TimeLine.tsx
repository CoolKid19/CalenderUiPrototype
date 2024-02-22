import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react'
import { Alert, Avatar, Box, Button, Grid, Stack } from '@mui/material';
import Select from './components/Select';
import YearCalendar from './components/YearCalender';


const dummy = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
const option1 = ['North', 'South', 'East', 'West']
const option3 = ['2020', '2021', '2022', '2023', '2024']
const option2 = ['', '', '', '']
const option4 = ['', '', '', '']

export const TimeLine = () => {

    const [Item, setItem] = useState('2024')
    const [Value, setValue] = useState('North')
    const [Value1, setValue1] = useState('ds');
    const [Item1, setItem1] = useState('ds');

    
  return (

    <div style={{
        padding: "0.2rem 1rem ",
        backgroundColor: 'white',
        borderRadius: '8px',
        borderColor: 'divider',
        minHeight: '90vh',
      }}>
    
    <div style={{
    display: "flex",
    flexDirection: 'row',
    margin: '10px 0px 20px 0px',
    alignItems: 'center',
    justifyContent: 'space-evenly'
    
}}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ paddingRight: '0.5rem', color: 'grey' }}>Region</span>
        <Select Item={Value} setItem={setValue} width = "12rem" options = {option1} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'grey' }}>Milestone</span>
        <Select Item={Value1} setItem={setValue1} width = "12rem" options = {option2} />
    </div>
    <Alert severity="info">Due dates will be assigned by your local time zone</Alert>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '25px', backgroundColor: 'green', height: '25px', borderRadius: '50%', marginRight: '5px' }}></div>
        <span>Overall MSR submission</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '25px', backgroundColor: 'yellow', height: '25px', borderRadius: '50%', marginRight: '5px' }}></div>
        <span>SPW MSR submission</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '25px', backgroundColor: 'blue', height: '25px', borderRadius: '50%', marginRight: '5px' }}></div>
        <span>Auto Post Date</span>
    </div>
</div>
    
        <Box  sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        borderStyle: 'solid',
        borderColor: 'divider',
        borderRadius: '10px',
        height: '75px',
        alignItems: 'center',
        justifyContent: 'flex-start'
    
      }} >
          
    
          
        <span
      style={{
        padding: '20px 0px 20px 20px',
        color: 'grey'
      }}
    >
      Calender Year:
    </span>
    
          <Select Item = {Item} setItem = {setItem} width = "21.875rem" options = {option3} />
        
          <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'grey' 
      }}
    >Select DPR Holidays:</div>
    
        <Select Item = {Item1} setItem = {setItem1} width = "21.875rem" options = {option4} />
       
        </Box>
       
         <Grid  container spacing={0.5} xs = {14} sx={{marginTop:"20px"}}>
          {dummy.map((item) => (
            <Grid key={item} item lg = {2} >
              <YearCalendar year={Item} month={item} region = {Value} />
            </Grid>
          ))}
        </Grid>
        
        
        
        
        <Stack direction='row' spacing={4} justifyContent='center' p = {3}>
        <Button variant="outlined" color='inherit'>Cancel</Button>
        <Button variant="contained">Save</Button>
        </Stack>
        
    
        </div>




  )
}
