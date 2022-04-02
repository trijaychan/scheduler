import React from "react";

import DayListItem from "./DayListItem";

// component that display days where appointments can be booked and the 
// number of spots available
export default function DayList(props) {
  const { value, onChange } = props;

  // creates an array consisting of weekdays using an array which is passed
  // as props
  const listItems = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id} 
        name={day.name} 
        spots={day.spots} 
        selected={day.name === value}
        setDay={() => onChange(day.name)}
      />
    );
  });

  return (
    <ul>
      {listItems}
    </ul>
  )
};