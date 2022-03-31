import React from "react";

import "components/Appointment/styles.scss"

// an empty card with a button in the middle that shows a form
export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
};