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