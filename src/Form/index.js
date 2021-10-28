import "./style.css"
import Section from "../Section"
import Button from "../Button"
import Result from "../Result"
import Introduction from "../Introduction"

const Form = (props) => (
    <form className="form">
    <fieldset className="form__fieldset">
        <Introduction/>
        <Section/>
        <Button/>
        <Result/>
    </fieldset>
</form>
)
   


export default Form; 