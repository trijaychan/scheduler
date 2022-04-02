import React, { useState } from 'react';

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import "components/Appointment/styles.scss";

// a form which is used to create appointments
export default function Form(props) {
  // state variables for student name, interviewer id, and error message
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  // sets user inputs back to default and returns to previous mode
  function cancel() {
    setStudent("");
    setInterviewer(null);
    props.onCancel();
  }

  // checks if user input for student name is valid
  // sets error message if not and saves appointment otherwise
  function validate() {
    if (!student) {
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {
      setError("Interviewer cannot be blank");
      return;
    }
    
    setError("");
    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            value={student}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
};