import { Dispatch, SetStateAction, createContext, useState, ReactNode } from "react";


export type RegionHolidays = {
        Region: string
        Holidays: {
          holidayDate
: Date,
          type: string
        
        } [];
    }[];

// dummy data for testing

const d1 = new Date(2024, 1, 14);
  const d2 = new Date(2024, 1, 21);
  const d3 = new Date(2026, 1, 21);
  const d4 = new Date(2024, 1, 15);
  const d5 = new Date(2024, 1, 22);
  const d6 = new Date(2024, 1, 16);
  const d7 = new Date(2024, 1, 23);
  const d8 = new Date(2024, 1, 17);
  const d9 = new Date(2024, 1, 24);

//////////////////////////////////////////

export interface RegionHolidayContextInterface {
    regionHoliday: RegionHolidays,
    setRegionHoliday: Dispatch<SetStateAction<RegionHolidays>>
}

const defaultState = {
    regionHoliday:[
        {
            Region: 'North',
            Holidays: [{holidayDate: d1, type: '0'}, {holidayDate: d2, type: '1'}, {holidayDate: d3, type: '2'}] 
        },
        {
            Region: 'South',
            Holidays: [{holidayDate: d3, type: '0'}, {holidayDate: d4, type: '1'}]
        },
        {
            Region: 'East',
            Holidays: [{holidayDate: d5, type: '0'}, {holidayDate: d6, type: '1'}, {holidayDate: d9, type: '2'}] 
        },
        {
            Region: 'West',
            Holidays: [{holidayDate: d7, type: '0'}, {holidayDate: d8, type: '1'}] 
        }
    ],
    setRegionHoliday: (regionHoliday: RegionHolidays) => {}
} as RegionHolidayContextInterface

export const RegionHolidaysContext = createContext(defaultState);

type RegionHolidaysProviderProps = {
    children: ReactNode
}

export default function RegionHolidaysProvider({children}: RegionHolidaysProviderProps)
{

    const [regionHoliday, setRegionHoliday] = useState<RegionHolidays>([
        {
            Region: 'North',
            Holidays: [{holidayDate: d1, type: '0'}, {holidayDate: d2, type: '1'}, {holidayDate: d3, type: '2'}] 
        },
        {
            Region: 'South',
            Holidays: [{holidayDate: d3, type: '0'}, {holidayDate: d4, type: '1'}]
        },
        {
            Region: 'East',
            Holidays: [{holidayDate: d5, type: '0'}, {holidayDate: d6, type: '1'}, {holidayDate: d9, type: '2'}] 
        },
        {
            Region: 'West',
            Holidays: [{holidayDate: d7, type: '0'}, {holidayDate: d8, type: '1'}] 
        }
    ])
    return (
        <RegionHolidaysContext.Provider value = {{ regionHoliday, setRegionHoliday}}>
            {children}
        </RegionHolidaysContext.Provider  >
    )

}
