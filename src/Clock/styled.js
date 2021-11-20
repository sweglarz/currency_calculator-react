import styled from "styled-components";

export const ClockElement = styled.p`
    font-family: 'Space Mono', monospace;
    color: #fff;
    font-size: 14px;
    text-align: right;
    margin-bottom: 40px;

    @media (max-width: 550px){
        text-align: center
    }
`