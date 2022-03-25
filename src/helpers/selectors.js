export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state;
  const dayFromState = days.filter(el => el.name === day);
  
  let ids;
  dayFromState[0] ? ids = dayFromState[0].appointments : ids = [];

  if (appointments) {
    return Object.values(appointments).filter(el => ids.includes(el.id));
  } else {
    return [];
  }
};

export function getInterviewersForDay(state, day) {
  const { days, appointments } = state;
  const dayFromState = days.filter(el => el.name === day);
  
  let ids;
  dayFromState[0] ? ids = dayFromState[0].appointments : ids = [];
  
  const interviewers = [];
  let temp;

  for (const id of ids) {
    temp = appointments[`${id}`].interview 
    if (temp) {
      if (!interviewers.includes(state.interviewers[temp.interviewer]))
      interviewers.push(state.interviewers[temp.interviewer]);
    }
  }

  return interviewers;
};

export function getInterview(state, interview) {
  let id = interview ? interview.interviewer : null;

  if (id) {
    const obj = {
      student: interview.student,
      interviewer: Object.values(state.interviewers)[id - 1]
    };
    return obj;
  } else {
    return null;
  }
};