import { Box, Grid} from "@mui/material";
import Select from "./components/Select";
import { DateCalendar } from "@mui/x-date-pickers";
import Calendar from "./components/Calender";
import DatePickerOpenTo from "./components/DatePickerOpenTo";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import YearCalendar from "./components/YearCalender";

import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";


const dummy = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]


function App() {
  
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2024-04-17'));
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  return (
    <>
    <NavBar setIsDrawerOpen = {setIsDrawerOpen} />
    <Sidebar setIsDrawerOpen = {setIsDrawerOpen} isDrawerOpen = {isDrawerOpen} />
    
    <Box  sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }} p = {4} >
   
    <Select Item = "region" />
   
    <Select Item = "Milestone" />
   
    </Box>

    <Box  sx={{ display: 'flex', alignItems: 'center',  gap: '16px', padding: '16px' }} >
   
    <DatePickerOpenTo value = {value} setValue = {setValue} />

    <Select Item = "Holidays" />
    
    </Box>

    { <Grid container spacing={2}>
      {dummy.map((item) => (
        <Grid key={item} item xs={3}>
          <YearCalendar year={value} month={item} />
        </Grid>
      ))}
    </Grid>}
  </>
  );
}

export default App;
