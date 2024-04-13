import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function getDesignTokens(mode) {
  return {
    palette: {
      mode,
      ...(mode === 'dark' ? {
        background: {
          default: "#121212",
          paper: "#1e1e1e",
        },
        text: {
          primary: "#ffffff",
          secondary: "#b9b9b9",
        },
      } : {
        background: {
          default: "#ffffff",
          paper: "#f7f7f7",
        },
        text: {
          primary: "#313D4A",
          secondary: "#5f6368",
        },
      }),
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? "#313D4A" : "#EFF4FB",
            color: mode === 'dark' ? "#ffffff" : "#313D4A",
          }
        }
      }
    }
  };
}

export default function DatePickerValue() {
  const [mode, setMode] = React.useState('light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  //const [drink, setDrink] = React.useState

  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target instanceof HTMLElement && mutation.attributeName === 'class') {
          const isDark = document.body.classList.contains('dark');
          setMode(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className=' col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4 text-white'>
          <div className='mb-4 text-black font-bold dark:font-bold dark:text-white'>Enter Drinks and Goals</div>
          <DesktopDatePicker
            label="Enter a date"
            value={value}
            onChange={setValue}
          />
          <div className='mt-4'></div>
          <label className='text-black font-bold dark:font-bold dark:text-white'>Number of Drinks</label>
          <input
            className="mt-2 mb-4 w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="drinks"
            id="drinks"
            placeholder='Enter number of drinks'
          />
          <label className='text-black font-bold dark:font-bold dark:text-white'>Goal</label>
          <input
            className="mt-2 mb-4 w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="goal"
            id="goal"
            placeholder='Enter your goal'
          />
          <button className='border py-2 pl-4 pr-4 font-bold rounded text-black bg-gray dark:bg-meta-4 dark:font-bold dark:text-white' type='submit'>Submit</button>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
