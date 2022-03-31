import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss"

// component for each clickable interviewer in the interviewer list
export default function InterviewerListItem(props) {
  const { onChange } = props;
  const itemClasses = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });  

  // if the interviewer is selected then they are highlighted and their
  // name is display
  return (
    <li className={itemClasses} onClick={onChange}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />

      {props.selected ? props.name : null}
    </li>
  );
};