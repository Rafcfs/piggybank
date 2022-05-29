import styled from "styled-components";

export const Container = styled.div`
    height: 40px;
    background: #D8D8D8;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    `

export const ButtonNavBar = styled.button`
    width: 120px;
    border: 1px solid black;
    height: 30px;
    border-radius: 10px;
    background-color: #29AE5D;
    color: #fff;

    &:hover{
        background-color: #4DC67D;
    }
`