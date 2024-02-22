import { Dayjs } from 'dayjs';
import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './YearCalender.css'
import {RegionHolidaysContext} from '../context/RegionHolidayContext'



interface YearCalendarProps {
  year: string;
  month: string;
  region: string;
}

const YearCalendar: React.FC<YearCalendarProps> = (props) => {

  const regionHoliday = useContext(RegionHolidaysContext);
  
  const { year, month, region } = props;

  const monthDate = new Date(Number(year), Number(month) - 1, 1);
  const monthName = monthDate.toLocaleString('default', { month: 'long' });

  // const h1 = new Date(Number(year), Number(month) - 1, 18);
  // const h2 = new Date(Number(year), Number(month) - 1, 9);
  // const h3 = new Date(Number(year), Number(month) - 1, 27);
  let holidays : Date[] = [];

  for(const obj of regionHoliday.regionHoliday){
    const {Region, Holidays} = obj;
    if(Region === region){
      holidays = Holidays;
      console.log(holidays)
      break;
    }
  }


  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    let currClass = "";

    if (view === 'month') {
      currClass += 'custom-month-label';
    }

    if (date.getDay() === 0 || date.getDay() === 6) {
      currClass = "weekend";
    }

    if (date.getMonth() === monthDate.getMonth() && date.getFullYear() === monthDate.getFullYear() && date.getDate() === monthDate.getDate()) {
      currClass += ' no-highlight';
      return currClass;
    }

    for (const holiday of holidays) {
      if (date.getMonth() === holiday.getMonth() && date.getFullYear() === holiday.getFullYear() && date.getDate() === holiday.getDate()) {
        currClass += ' highlighted';
        break;
      }
    }

    return currClass.trim();
  };

  return (
    <div className="calendar-container" >
      <div className="calender-NavigationPanel">
        <h4>{monthName} {year}</h4>
      </div>
      <Calendar
        value={monthDate}
        showNavigation={false}
        tileClassName={tileClassName}
        className="YearCalendar"
        calendarType="hebrew"
        showNeighboringMonth={false}
        formatShortWeekday={(locale, date) => {
          const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
          return days[date.getDay()];
        }}
      />
    </div>
  );
};

export default YearCalendar;

