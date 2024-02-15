import { Dayjs } from 'dayjs';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './YearCalender.css'

const YearCalendar: React.FC<{year: Dayjs | null; month: string}> = (props) => {
    const date =  props.year; 
    const year = "" + date?.year()

    const month = new Date(Number(year), Number(props.month)-1, 1);
    const monthName = month.toLocaleString('default', { month: 'long' });
    
    const h1 = new Date(Number(year), Number(props.month)-1, 18);
    const h2 = new Date(Number(year), Number(props.month)-1, 9);
    const h3 = new Date(Number(year), Number(props.month)-1, 27);
    const Holidays = [h1, h2, h3]
    
    const tileClassName = ({ date }: { date: Date }) => {
      
        if (date.getMonth() === month.getMonth() && date.getFullYear() === month.getFullYear() && date.getDate() === month.getDate()) {
            
            return 'no-highlight';
        }

        for (const holiday of Holidays) {
          if (date.getMonth() === holiday.getMonth() && date.getFullYear() === holiday.getFullYear() && date.getDate() === holiday.getDate()) {
              return 'highlighted';
          }
      }
     
        return '';
    };


  return (
    <>
         <h2>{monthName} {year}</h2>
    {/* <div style={{ display: 'flex' }} > */}
          <Calendar
            value={month}
            nextLabel={null} // Hides the next month navigation button
            prevLabel={null} // Hides the previous month navigation button
            next2Label={null} // Hides the next year navigation button
            prev2Label={null} // Hides the previous year navigation button
            showNavigation={false} // Hides the entire navigation
            showNeighboringMonth={false} // Hides days from neighboring months
            tileClassName={tileClassName} // Apply custom class names to tiles
            className="YearCalendar"
          />
    {/* </div> */}
    </>
  );
};

export default YearCalendar;
