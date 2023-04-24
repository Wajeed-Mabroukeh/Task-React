
import './Form.css';
import MainTitle from './Components/MainTitle/MainTitle';
import SubTitle from './Components/SubTitle/SubTitle';
import Submit from './Components/Submit/Submit';
import Textarea from './Components/Textarea/Textarea';
import PColor from './Components/PColor/PColor';
import PLoading from './Components/PLoading/PLoading';
import {disable} from "./Components/FunctionsShared/Fun"
import {enable} from "./Components/FunctionsShared/Fun"
import {hide} from "./Components/FunctionsShared/Fun"
import {show} from "./Components/FunctionsShared/Fun"
import {submitForm} from "./Components/FunctionsShared/Fun"

import {button} from "./Components/Submit/Submit" 
import {textarea} from "./Components/Textarea/Textarea" 
import {errorMessage} from "./Components/PColor/PColor" 
import {loadingMessage} from "./Components/PLoading/PLoading" 
import {successMessage} from "../H1Success/H1Success" 

import { useEffect, useRef } from "react";

export let form = document.getElementById("form");


function Form() {
  const formRef = useRef(null);
  useEffect(() => {
    if (formRef.current) {
      formRef.current.onsubmit = handleFormSubmit;
    }
  }, [formRef]);

    return (
      <> 
      <form id="form" onsubmit={handleFormSubmit}>
        <MainTitle/>
        <SubTitle/>
        <Textarea/>
        <br/>
        <Submit/>
        <PLoading/>
        <PColor/>
        </form>
        
        </>
    );
  }
  
  export default Form;


  async function handleFormSubmit(e) {
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loadingMessage);
    hide(errorMessage);
    try {
        await submitForm(textarea.value);
        show(successMessage);
        hide(form);
    } catch (err) {
        show(errorMessage);
        errorMessage.textContent = err.message;
    } finally {
        hide(loadingMessage);
        enable(textarea);
        enable(button);
    }
}
  