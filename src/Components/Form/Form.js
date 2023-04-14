
import './Form.css';
import './Components/MainTitle/MainTitle';
import './Components/SubTitle/SubTitle';
import './Components/Submit/Submit';
import './Components/Textarea/Textarea';
import './Components/PColor/PColor';
import './Components/PLoading/PLoading';

function Form() {
    return (
      <form id="form">
        <MainTitle/>
        <SubTitle/>
        <Textarea/>
        <br/>
        <Submit/>
        <PLoading/>
        <PColor/>
        </form>
    );
  }
  
  export default Form;
  