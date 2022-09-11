import React from "react";

function Button({setModal}) {
  return (
    <button onClick={()=>setModal(true)} className="button_signup" >
        <span className="Sign-inSign-up" > Sign in/Sign up</span>
      </button>
);
}

export default Button; 