import axios from "axios";
import { useState, useEffect } from "react";

// function that returns an object containing the main state and functions
// that manipulate it
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // function that sets the day key in the state variable
  const setDay = (day) => setState({ ...state, day });

  // effect that runs after every render
  useEffect(() => {
    // makes get requests and stores it in a variable called all
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers")
    ]).then((all) => {
      // updates state variable using data from requests
      setState({ ...state, days: all[0].data, appointments: all[1].data, interviewers: all[2].data });
    });
  }, []);

  // function that returns a new days array which has an updated number of spots
  function updateSpots(state, booking) {
    const { days, appointments } = state;

    const index = days.filter((el) => el.name === state.day)[0].id - 1;
    const dayAppointments = Object.values(appointments).filter((el) => days[index].appointments.includes(el.id));
    const spots = dayAppointments.filter((el) => !el.interview).length + (booking ? -1 : 1);
    
    const newDays = [...days.slice(0, index), { ...days[index], spots }, ...days.slice(index + 1, days.length)];
    console.log(newDays);

    return newDays;
  };

  // function that saves an appointment through the api
  function bookInterview(id, interview) {
    // new appointments object for state that has new appointment added
    const appointments = {
      ...state.appointments,
      [id]: {
        ...state.appointments[id],
        interview: { ...interview }
      }
    };
    
    // makes a put request to api endpoint to add save appointment
    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        // sets state with new appointments object and updated spots
        setState({
          ...state,
          appointments,
          days: updateSpots(state, true)  
        });
    });
  };
  
  // function that cancels an ppointment through the api
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