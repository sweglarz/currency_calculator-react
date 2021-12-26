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
export const FormButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #e08e16;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin: 20px 0;
    cursor: pointer;

    &:hover{
        background-color: #f19f17;
    }
    &:active{
        background-color: #f29f28;
    }
`
export const LoadingText = styled.p`
    text-align: center;
    color: #fff;
`
export const LoadingSpinner = styled.div`
    display: flex;
    justify-content: center;
    &::after{
        content: "";
        width: 60px;
        height: 60px;
        border: 8px solid #ddd;
        border-top-color: #e08e16;
        border-radius: 50%;
        animation: LoadingSpinner 1s linear infinite;
    }
    @keyframes LoadingSpinner {
        to {
            transform: rotate(1turn);
        }
    }
`
export const StyledInformationText = styled(LoadingText)`
    font-size: 14px;
    margin: 0;
`
export const ErrorText = styled(LoadingText)`
    margin: 0;
    font-size: 18px;
    color: #EA2027;
    font-weight: bold;
    text-shadow: 1px 1px 1px #000;
`
export const ErrorImage = styled.img`
    display: block;
    margin: 20px auto;
    width: 64px;
`