import React from "react";
import PropTypes from "prop-types";

import InterviewerListItem from "./InterviewerListItem"
import "components/InterviewerList.scss"

function InterviewerList(props) {
  const list = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem 
        name={interviewer.name}
        avatar={interviewer.avatar}
        id={interviewer.id}
        onChange={() => props.onChange(interviewer.id)}
        selected={interviewer.id === props.value}
      />
    );
  });

  return (
    <>
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {list}
      </ul>
    </>
  );
};

InterviewerListItem.propTypes = {
  iterviwers: PropTypes.array.isRequired
};

export default InterviewerListItem;