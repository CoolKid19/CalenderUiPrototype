import {  Typography} from "@mui/material";


import "./App.css"
import BasicTabs from "./components/SubNavBar";
import { TimeLine } from "./TimeLine";

import RegionHolidaysProvider from "./context/RegionHolidayContext";




function App() {

  
  return (
  <RegionHolidaysProvider>
    <Typography variant = 'h6'>
      
    </Typography>

    <div style ={{
      borderRadius: '8px 8px 0px 0px',
      marginBottom: '3px',
      backgroundColor: 'white',
      height: '30px',
    }}>
      <BasicTabs />
      
    </div>

 
    

    

  </RegionHolidaysProvider>  
  )
  
 
}

export default App;
