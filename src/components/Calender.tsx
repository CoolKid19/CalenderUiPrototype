import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
import styled from '@emotion/styled';

const StyledDateCalendar = styled(DateCalendar)(({ theme }) => ({
    "& .MuiIconButton-root.MuiPickersCalendarHeader-iconButton": {
      display: "none"
    }
  }));

const Calendar: React.FC<{ month: string; value: Dayjs | null; setValue: (updatedValue: Dayjs | null) => void}> = (props) => {
    const date =  props.value;
    const year = "" + date?.year()
    console.log(year);

    const d = `${props.month}-01-${year}`;
    

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DateCalendar value={dayjs(`${props.value}-0${props.month}-01`)} onChange={} /> */}
    
        <StyledDateCalendar 
            
            value={dayjs(d)} 
            onChange={(newValue) => props.setValue(newValue)} />
        
    </LocalizationProvider>
  );
}

export default Calendar;
