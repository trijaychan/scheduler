import React from "react";
import useApplicationData from "hooks/useApplicationData"
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors";

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "./Appointment";

export default function Application(props) {
  // exports modularized state and state functions
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  // uses selector to create an array containing the interviewers for the day
  const dailyInterviewers = getInterviewersForDay(state, state.day);

  // an array of appointments that uses the state appointments for props
  const schedule = getAppointmentsForDay(state, state.day).map((appointment) => {
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={getInterview(state, appointment.interview)}
        interviewers={dailyInterviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />  
      </section>

      <section className="schedule">
        {schedule}
        <Appointment time="5pm" />
      </section>
    </main>
  );
}
