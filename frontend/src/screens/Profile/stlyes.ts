import styled from "styled-components";

export const FormView = styled.div`
    background-color: #D8D8D8;
    width: 1300px;
    height: 500px;
    display: grid;
    justify-content: center;
    border-radius: 10px;
    padding: 20px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`

export const CenterView = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`

export const ViewOne = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1200px;
`

export const InputProfile = styled.input`
    width: 200px;
    height: 30px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
`

export const SelectProfile = styled.select`
    width: 200px;
    height: 30px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px;
`

export const DivButton = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`