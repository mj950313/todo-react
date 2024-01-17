import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        formatDay={(locale, date) => dayjs(date).format('DD')}
        calendarType="US" // 첫 번째 요일을 일요일로 설정
      />
    </div>
  );
};

export default MyCalendar;