import React from "react";

import "components/Appointment/styles.scss"

// component that separatees appointment cards and displays a time from props
export default function Header(props) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
};