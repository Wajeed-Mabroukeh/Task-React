import {disable} from "../FunctionsShared/Fun"
import {enable} from "../FunctionsShared/Fun"
import {button} from "../Submit/Submit" 

import { useEffect, useRef } from "react";

export let textarea = document.getElementById("textarea");


function Textarea() {

    const formRef = useRef(null);
  useEffect(() => {
    if (formRef.current) {
        formRef.current.textarea.oninput = handleTextareaChange;
    }
  }, [formRef]);

    return (
        <>
         
        <textarea id="textarea" oninput={handleTextareaChange}></textarea>
        </>
    );
  }
  
  export default Textarea;

  function handleTextareaChange() {
    if (textarea.value.length === 0) {
        disable(button);
    } else {
        enable(button);
    }
}