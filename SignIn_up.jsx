
import React from "react";
import Button from "./Button";
import { Modal } from "./Modal";
import { useState } from "react";

function Signin_up() {

  const [modal, setModal]=useState(false);
  return (<div>
    <Button setModal={setModal} />
    {modal === true &&(<Modal setModal={setModal} />)}
  
  </div>

    );
}

export default Signin_up;  