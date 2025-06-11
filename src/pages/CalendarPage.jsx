import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateClick = (value) => {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0'); // 0부터 시작하니까 1을 더해줌
    const day = String(value.getDate()).padStart(2, '0');
    const formatted = `${year}-${month}-${day}`;
    navigate(`/memo/${formatted}`);
  };

  return (
    <>
      <style>
        {`
          .react-calendar {
            transform: translateY(-50px);
            width: 500px;
            margin: 0 auto;
            border: 2px solid rgb(38, 180, 100);
            border-radius: 10px;
            padding: 20px;
            font-family: 'NanumSquareNeo', sans-serif;
            box-shadow: 0 0 10px rgba(0, 128, 36, 0.2);
          }

          .react-calendar__tile {
            max-width: 100%;
            padding: 20px 6.6667px;
            background: none;
            text-align: center;
            font: inherit;
            font-size: 0.833em;
          }

      // css가 안 먹음....이유를 모르겠다

          .react-calendar__tile--now {
            background: #d4f8e8;
          }

          .react-calendar__tile--active {
            background: #91e39e;
            color: white !important;
          }

          .react-calendar__month-view__weekdays__weekday {
            padding: 1.5em;
          }
        `}
      </style>
      <div style={{ textAlign: 'center' }}>
        <p style={styles.subtitle}>여름 방학 캘린더</p>
        <div style={styles.calendarWrapper}>
          <Calendar
            onClickDay={handleDateClick}
            onChange={setDate}
            value={date}
            tileClassName="custom-tile"
          />
        </div>
      </div>
    </>
  );
};

const styles = {
  subtitle: {
    fontSize: '24px',
    fontWeight: '200',
    color: '#008024',
    marginTop: '40px',
    marginBottom: '13rem',
    textAlign: 'center',
    fontFamily: 'NanumSquareNeo, sans-serif',
  },
  calendarWrapper: {
    maxWidth: '500px',
    margin: '0 auto',
  },
};


export default CalendarPage;