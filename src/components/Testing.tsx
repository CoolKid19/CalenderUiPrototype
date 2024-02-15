import React from 'react';
//import { LocalizationProvider, DatePicker, AdapterDayjs } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Create a styled DatePicker component with custom styles
const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  "& .MuiPickersCalendarHeader-switchHeaderButton": {
    display: "none"
  }
}));

const Testing: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDatePicker
        value={new Date()} // Example value, adjust as needed
      />
    </LocalizationProvider>
  );
};

export default Testing;
