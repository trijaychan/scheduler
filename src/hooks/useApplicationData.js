import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers")
    ]).then((all) => {
      setState({ ...state, days: all[0].data, appointments: all[1].data, interviewers: all[2].data });
    });
  }, []);

  function updateSpots(state, booking) {
    const { days, appointments } = state;

    const index = days.filter((el) => el.name === state.day)[0].id - 1;
    const dayAppointments = Object.values(appointments).filter((el) => days[index].appointments.includes(el.id));
    const spots = dayAppointments.filter((el) => !el.interview).length + (booking ? 1 : -1);
    
    const newDays = [...days.slice(0, index), { ...days[index], spots }, ...days.slice(index + 1, days.length)];
    console.log(newDays);

    return newDays;
  };

  function bookInterview(id, interview) {
    const appointments = {
      ...state.appointments,
      [id]: {
        ...state.appointments[id],
        interview: { ...interview }
      }
    };
  
    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments,
          days: updateSpots(state, false)
        });
    });
  };
  
  function cancelInterview(id) {
    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments: {
            ...state.appointments,
            [id]: { ...state.appointments[id], interview: null}
          },
          days: updateSpots(state, false)
        });
      });
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}