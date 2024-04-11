import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root:{
          backgroundColor: "#313D4A",
          color: "white"
        }
      }
    }
  }
})

export default function DatePickerValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <div className='col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4 text-white'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProvider theme={theme}>
    <DesktopDatePicker 
    label="Enter a date"
    slotProps={{
      layout: {
        sx: {
          color: '#bbdefb',
          borderRadius: '14px',
          borderWidth: '1px',
          borderColor: '#2196f3',
          border: '1px solid',
          backgroundColor: '#0d47a1',
        }
        }
      }} 
    />
    </ThemeProvider>
    </LocalizationProvider>
    <label className='text-black dark:text-white'>Number of Drinks</label>
    <input
      className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
      type="text"
      name="fullName"
      id="fullName"
      placeholder='Enter number of drinks'
      
    />
    <button type='submit' className='text-black border rounded-lg dark:text-white'>Submit</button>
    </div>
  );
}