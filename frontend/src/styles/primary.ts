import styled from "styled-components";

export const PrimaryImput = styled.input`
    width: 200px;
    height: 40px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #333;
    border-radius: 10px;
`

export const PrimaryLabel = styled.label`
    font-size: 20px;
    font-weight: bolder;
`

export const PrimaryButton = styled.button`
    background-color: #4DC67D;
    width: 200px;
    height: 40px;
    border-radius: 10px;

    &:hover{
    color: #fff;
    background-color: #1e8449;
    opacity: 1;
    transform: translateY(0);
    transition-duration: .35s;
    }

    &:active{
    transform: translateY(2px);
    transition-duration: .35s;
    }
`