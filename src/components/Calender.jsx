import React from 'react'
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { useState } from 'react';


const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */

  max-width: 80%;
  
  margin: auto;
  margin-top: 20px;
  background-color: #000000;
  padding: 10px;
  border-radius: 3px;
  border: 2px solid red;


   /* ~~~ navigation styles ~~~ */
   .react-calendar__navigation {
    /* display: flex; */

    .react-calendar__navigation__label {
      font-weight: bold;
      height: 5vh;
      color:white;
      padding-bottom:0;
    }

    .react-calendar__navigation__arrow {
      /* flex-grow: 0.333; */
      height: 5vh;
      color: white;
      padding-bottom:0;
    }
}
     /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-decoration: none;
    color:white; 
    border: 2px solid purple;
  }
   /* ~~~ button styles ~~~ */
   button {
    /* margin: 3px; */
    background-color: #6f876f;
    border: 2px solid yellow;
    border-radius: 3px;
    color: white;
    padding-bottom: 18vh;
    align-items: flex-start;
    
    text-align: start;

    &:hover {
      background-color: #556b55;
    }

    &:active {
      background-color: red;
    }
  }

   /* ~~~ day grid styles ~~~ */
   .react-calendar__month-view__days {
    border: 3px solid teal;
    display: grid !important;
    grid-template-columns: repeat(7, 1fr); 
    

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

   /* ~~~ neighboring month & weekend styles ~~~ */
   .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }

   /* ~~~ active day styles ~~~ */
   .react-calendar__tile--range {
      /* box-shadow: 0 0 6px 2px black; */
      border: 4px solid blue;
      
  }
`;

const MyCalender = () => {
  // const value = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [datenow, setDatenow] = useState(new Date())
  console.log("data", date)
  const currentMonth = () => {
    setDatenow(datenow)
  }
 
  return (
    <div>

      {/* <div onChange={onChange} value={value}>today</div> */}

      <div onClick={currentMonth}> today</div>

    
          <div>
            <CalendarContainer>

              <Calendar calendarType='US'
                onChange={setDate}
                value={date}
                selectRange={true}
                
                

              />
            </CalendarContainer>
          </div>
       
    </div >
  )
}

export default MyCalender
