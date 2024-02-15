import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

const DatePickerOpenTo: React.FC<{value: Dayjs | null; setValue: (updatedValue: Dayjs | null) => void}> = (props) => {
  console.log(props.value)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker 
        label={'"year"'} 
        openTo="year" 
        
        views={['year']}
        value={props.value}
        onChange={(newDate) => {
          
          props.setValue(newDate)
        }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default DatePickerOpenTo;

