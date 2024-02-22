import { Dispatch, SetStateAction, createContext, useState, ReactNode } from "react";


export type RegionHolidays = {
        Region: string
        Holidays: Date[];
    }[];



const d1 = new Date(2024, 1, 14);
  const d2 = new Date(2024, 1, 21);
  const d3 = new Date(2026, 1, 21);
  const d4 = new Date(2024, 1, 15);
  const d5 = new Date(2024, 1, 22);
  const d6 = new Date(2024, 1, 16);
  const d7 = new Date(2024, 1, 23);
  const d8 = new Date(2024, 1, 17);
  const d9 = new Date(2024, 1, 24);

export interface RegionHolidayContextInterface {
    regionHoliday: RegionHolidays,
    setRegionHoliday: Dispatch<SetStateAction<RegionHolidays>>
}

const defaultState = {
    regionHoliday:[
        {
            Region: 'North',
            Holidays: [d1, d2, d3] 
        },
        {
            Region: 'South',
            Holidays: [d3, d4]
        },
        {
            Region: 'East',
            Holidays: [d5, d6, d9] 
        },
        {
            Region: 'West',
            Holidays: [d7, d8] 
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
            Holidays: [d1, d2, d3] 
        },
        {
            Region: 'South',
            Holidays: [d3, d4]
        },
        {
            Region: 'East',
            Holidays: [d5, d6, d9] 
        },
        {
            Region: 'West',
            Holidays: [d7, d8] 
        }
    ])
    return (
        <RegionHolidaysContext.Provider value = {{ regionHoliday, setRegionHoliday}}>
            {children}
        </RegionHolidaysContext.Provider  >
    )

}
