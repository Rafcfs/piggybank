import styled from "styled-components";

export const Container = styled.div`
    background: #f4f4f4;
    width: 100%;
    height: 100%;
`

export const JustifyCenter = styled.div`
    display: flex;
    justify-content: center;
`

export const DivSaldo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border-bottom: 1px solid black;

    h4{
        color: red;
        font-size: 20px;
        font-weight: bold;
    }

    p{
        margin-left: 10px;
        font-size: 20px;
        font-weight: bold;
    }
`

export const LineButton = styled.div`
        display: flex;
 `

export const BoxMenu = styled.div`
    background-color: #73A580;
    height: 250px;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 600px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`

export const ButtonMovement = styled.button`
    width: 100px;
    height: 50px;
    margin: 10px;
    background: #fff;
    border: 1px solid #666;
    &:hover {
        background-color: #555;
        color: #fff;
    }
`