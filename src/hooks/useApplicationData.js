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

  function bookInterview(id, interview) {
    const appointments = {
      ...state.appointments,
      [id]: {
        ...state.appointments[id],
        interview: { ...interview }
      }
    };
  
    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview })
    .then((res) => setState({ ...state, appointments }));
  };
  
  function cancelInterview(id) {
    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => setState({ ...state, [id]: null }));
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}