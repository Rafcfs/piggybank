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
        justify-content: space-between;
        width:1000px;
 `

export const BoxMenu = styled.div`
    background-color: #73A580;
    height: 450px;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 1200px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`

export const ButtonMovement = styled.div`
    width: 180px;
    height: 180px;
    margin: 10px;
    background: #fff;
    border: 1px solid #666;
    display: grid;
    justify-content: center;
    padding: 20px;
    align-items: center;
    border-radius: 10px;
    &:hover{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
`

export const TitleCard = styled.p`
    color: #000;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
`