import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss"

// component for each clickable interviewer in the interviewer list
export default function InterviewerListItem(props) {
  const { selected, onChange, avatar, name } = props;
  const itemClasses = classNames("interviewers__item", {
    "interviewers__item--selected": selected
  });  

  // if the interviewer is selected then they are highlighted and their
  // name is display
  return (
    <li className={itemClasses} onClick={onChange}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />

      {selected ? name : null}
    </li>
  );
};