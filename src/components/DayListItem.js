import React from "react";
import classNames from "classnames"

import "components/DayListItem.scss";

// component that displays a single weekday and information about ti
export default function DayListItem(props) {
  const { setDay } = props;
  const classes = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  // function for formatting the text which shows the number of spots for a
  // given day
  const formatSpots = (spots) => {
    if (spots === 0) {
      return "No spots remaining";
    } else if (spots === 1) {
      return "1 spot remaining";
    } else {
      return `${spots} spots remaining`;
    }
  };

  return (
    <li className={classes} onClick={setDay} data-testid="day">
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
};