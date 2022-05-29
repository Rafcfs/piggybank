import styled from "styled-components";

export const Container = styled.div`
    display: grid;
`

export const Division  = styled.div`
    display: flex;
`

export const ViewOrigem = styled.div`
    width: 50%;
    display: grid;
    justify-content: center;
    padding: 20px;
    border-right: 1px solid black;
`

export const ViewDestinatario =styled.div`
    width: 50%;
    display: grid;
    justify-content: center;
    padding: 20px;
`

export const DivMargin = styled.div`
    margin: 10px;
    padding: 5px;

    label{
        font-size: 15px;
    }
`

export const ButtonMoviment = styled.button`
    background-color: #29ae5d;
    margin: 10px;
    width: 80px;
    border: 1px solid black;
    height: 20px;
    border-radius: 10px;
    color: #fff;


    &:hover{
        background-color: #4DC67D;
    }

`
export const DivRadioButton = styled.div`
    display: flex;
    justify-content: space-around;

    p{
        margin: 5px;
    }
`

export const ButtonMovimentDest = styled.button`
    background-color: #29ae5d;
    margin: 10px;
    width: 150px;
    border: 1px solid black;
    height: 30px;
    border-radius: 10px;
    color: #fff;

    &:hover{
        background-color: #4DC67D;
    }

`

export const InputMoviment = styled.input`
    border-radius: 10px;
    height: 25px;
    padding: 5px;
`

export const TitleMoviment = styled.p`
    font-size: 25px;
`