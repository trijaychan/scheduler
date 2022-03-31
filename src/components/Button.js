import React from "react";
import classNames from "classnames"

import "components/Button.scss";

// button component for multiple uses
export default function Button(props) {
   // includes the class in the key if its value is true
   const buttonClass = classNames("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger,
   });

   return (
      <button 
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
};
