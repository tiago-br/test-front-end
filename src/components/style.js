import styled from "styled-components";
import { corDaBox, corDeFundoAlternada } from "./variaveis";

export const TituloInteracao = styled.h2`
    text-align: center;
    font-size: 1.3rem;
    color:black
`
export const ButtonSend = styled.button`
    min-height: 40px;
    min-width: 100px;
    background-color:${(props)=>props.active ? "#32CD32":'red'};
    color:${(props)=>props.active ? "black" : "white"};
    font-weight: 700;
    height: 3.2vw;
    width: 10vw;
    cursor: pointer;
    border: 3px solid black;
    border-radius:15px ;

    :hover{
        background-color:${(props)=>props.active ? "#7CFC00": null};
    }
`

export const ButtonAddField = styled.button`
    width: 40px;
    height: 40px;
    cursor: pointer;
    border:2px solid black;
    border-radius: 50%;
    font-size:30px;
    text-align: center;
    vertical-align: middle;
    color: black;
    background-color: #a0a0a0;
    :hover{
        background-color: #666;
    }
`

export const InputTypeNumber = styled.input`
    text-align: center;
    height: 2rem;
    width: 2rem;
    color: whitesmoke;
    border:1.5px solid black;
    border-radius: 50%;
    outline: none;
    background-color:black;
    cursor: pointer;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    
    :focus{
        background-color:white;
        color:black;
        border-color:black;
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
`

export const InputTypeString = styled.input`
    text-align: center;
    height: 1.5rem;
    width: 3rem;
    color: whitesmoke;
    border:1.5px solid black;
    outline: none;
    background-color:black;
    cursor: pointer;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    :focus{
        background-color:white;
        color:black;
        border-color:black;
    }
`
export const DivInteracoesA = styled.div`
    display: flex;
    justify-content: space-around;
`

export const DivInteracoesANumeros = styled.div`
    width: 30rem;
    border:3px solid black;
    border-radius: 20px;
    min-height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${corDaBox};
    
    
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        
    }
    >div{
        display: flex;
        justify-content: space-around;
        margin-bottom: 0.5rem;
    }
`

export const DivInteracoesALetras = styled.div`
    width: 30rem;
    border:3px solid black;
    border-radius: 20px;
    background-color: ${corDaBox};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        
    }
    >div{
        display: flex;
        justify-content: space-around;
        margin-bottom: 0.5rem;
    }
`

export const Listas = styled.div`
   display: flex;
   justify-content: space-around;
   >div{
       width: 45vw;
   }
   h4{
       margin-top: 0;
       margin-bottom: 1rem;
   }
`

export const DivInteracao1B = styled.div`
    background-color: ${corDeFundoAlternada};
    height: 65vh;
    padding-top: 0.5rem;
`

export const DivInputsIntervalos = styled.div`
    min-width: 500px;
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    
    /* div{
        display: flex;
        align-items: center;
        justify-content: space-around;
    } */
    >div{
        display: flex;
        width: 25vw;
        min-height: 12rem;
        border:3px solid black;
        background-color:${corDaBox};
        align-items: center;
        flex-direction: column;
        border-radius: 25px;
    }
    
    h5{
        
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }
    label{
        display: block;
    }

    input{
        margin-top: 0.5rem;
        cursor: pointer;
        width:2.5rem;
        height: 1.5rem;
        border:2px solid black;
        outline: none;
        text-align: center;
        ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    }
`