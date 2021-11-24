import { createGlobalStyle } from "styled-components";
import { corDeFundo } from "./variaveis";

const GlobalStyle = createGlobalStyle`
    body{
    padding: 0;
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
    background-color: ${corDeFundo};
    }
`;

export default GlobalStyle;
