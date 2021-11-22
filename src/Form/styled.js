import styled from "styled-components";

export const FormElement = styled.form`
    max-width: 700px;
    margin: 0 auto;
`

export const FormFieldset = styled.fieldset`
    background-color: rgba(0, 0, 0, 0.700);
    border: none;
    border-radius: 5px;
    padding: 15px 40px;
`

export const FormParagraph = styled.p`
    color: #fff;
`

export const FormLegend = styled.legend`
    background-color: #e08e16;
    color: #fff;
    padding: 7px;
    border-radius: 10px;
    font-weight: 700;
`

export const FormSpan = styled.span`
    display: inline-block;
    max-width: 200px;
    width: 100%;
`

export const FormInput = styled.input`
    max-width: 200px;
    width: 100%;
    padding: 7px;

    @media(max-width: 550px){
        min-width: 100%;
    }
`