import React from "react";

import "components/Appointment/styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";

// constants which will be used for setting modes
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

// the root appointment component that determines which view is shown
export default function Appointment(props) {
  const { interview, bookInterview, cancelInterview, time, interviewers } = props;
  // state variable and functions from custom hook
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  // function called when form is submitted
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    
    transition(SAVING, true);

    // saves appointment through api
    bookInterview(props.id, interview)
      // transitions to showing newly created appointment if there are no
      // problems with the api
      .then(() => transition(SHOW))
      // shows an error otherwise
      .catch(error => transition(ERROR_SAVE));
  };

  // function called when user wants to delete an appointment
  function cancel() {
    transition(DELETING, true);

    // deletes data about appointment through api
    cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  };

  // returns html based on mode state variable
  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && <Form 
        interviewers={interviewers}
        onCancel={back}
        onSave={save}
      />}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === CONFIRM && <Confirm
          message="Are you sure you would like to delete?"
          onCancel={back}
          onConfirm={cancel}
        />}
      {mode === DELETING && <Status message="Deleting..." />}
      {mode === EDIT && <Form
        student={interview.student}
        interviewer={interview.interviewer.id}
        interviewers={interviewers}
        onCancel={back}
        onSave={save}
        />
      }
      {mode === ERROR_DELETE && <Error 
          message="Could not delete appointment"
          onClose={back}
        />
      }
      {mode === ERROR_SAVE && <Error
          message="Could not save appointment"
          onClose={back}
        />
      }
    </article>
  );
};