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
    margin-left: 30px;

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

export const BoxMenu = styled.div`
    background-color: #73A580;
    height: 200px;
    width: 50%;
    
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