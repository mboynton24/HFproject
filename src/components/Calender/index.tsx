"use client"
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Calendar" />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          //populate every day with number of drinks using user info
          { title: 'event 1', date: '2024-04-01' },
          { title: 'event 2', date: '2024-04-02' }
        ]}
      />
    </div>      
  );
};

export default Calendar;
