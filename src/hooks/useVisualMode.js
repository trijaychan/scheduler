import { useState } from "react";

// custom hook that will be used to determine appointment view
export default function useVisualMode(initial) {
  // state variable that determines view
  const [mode, setMode] = useState(initial);
  // state variable that records previous modes like a stack
  const [history, setHistory] = useState([initial]);

  // function for changing modes
  function transition(newMode, replace = false) {
    setMode(newMode);

    // if replacing previous mode
    if (!replace) {
      setHistory([...history, newMode]);
    }
  };

  // function that uses history array to return to previous modes
  function back() {
    if (history.length >= 2) {
      setMode(history[history.length - 2]);
      setHistory(history.slice(0, -1));
    }
  }

  // returns mode state variable and manipulator functions
  return {
    mode,
    transition,
    back
  };
};