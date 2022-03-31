// function that returns an array containing the appointments for a given day
export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state;
  // extracts only the given day from state days
  const dayFromState = days.filter(el => el.name === day);
  // appointment ids from variable above
  const ids = (dayFromState[0] ? dayFromState[0].appointments : []);

  if (appointments) {
    // returns all values from appointments objects that have an id from ids
    return Object.values(appointments).filter(el => ids.includes(el.id));
  } else {
    return [];
  }
};

// function that returns an array containing the interviewers for a given day
export function getInterviewersForDay(state, day) {
  const { days, interviewers } = state;
  const dayFromState = days.filter(el => el.name === day);
  const ids = (dayFromState[0] ? dayFromState[0].interviewers : []);
  
  if (interviewers) {
    return Object.values(interviewers).filter(el => ids.includes(el.id));
  } else {
    return [];
  }
};

// function that interview object given an interview id
export function getInterview(state, interview) {
  const id = interview ? interview.interviewer : null;

  if (id) {
    return {
      student: interview.student,
      interviewer: Object.values(state.interviewers)[id - 1]
    };
  } else {
    return null;
  }
};