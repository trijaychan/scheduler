import React, { useState, useClass } from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {
  const { setInterviewer } = props;
  const itemClasses = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });  

  return (
    <li className={itemClasses}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
        onClick={() => setInterviewer(props.id)}
      />

      {props.selected ? props.name : null}
    </li>
  );
};