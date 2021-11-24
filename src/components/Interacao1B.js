import React, { useState } from "react";
import {
  ButtonSend,
  DivInputsIntervalos,
  DivInteracao1B,
  TituloInteracao,
} from "./style";
import axios from "axios";

const checarInterlace = async (intervaloA, intervaloB) => {
  const { data } = await axios.get(
    `http://localhost:8080/interlace?intervaloA=${intervaloA}&intervaloB=${intervaloB}`
  );

  return data;
};
export default function Interacao1B() {
  const [result, setResult] = useState("Insira os intervalos");
  const [colorResult, setColorResult] = useState("black");
  const [intervalo11, setIntervalo11] = useState("");
  const [intervalo12, setIntervalo12] = useState("");
  const [intervalo21, setIntervalo21] = useState("");
  const [intervalo22, setIntervalo22] = useState("");

  async function checar(intervaloA, intervaloB) {
    const checkCompletA = intervaloA.split(",");
    const checkCompletB = intervaloA.split(",");
    if (checkCompletA.includes("") || checkCompletB.includes("")) {
      setResult("Todos os campos a cima precisam ser preenchidos");
      setColorResult("black");
      return;
    }
    const resultData = await checarInterlace(intervaloA, intervaloB);
    if (resultData) {
      setResult('resultado: "true"');
      setColorResult("green");
    } else {
      setResult('resultado: "false"');
      setColorResult("red");
    }
  }
  return (
    <DivInteracao1B>
      <TituloInteracao>Interação 2 - B</TituloInteracao>
      <DivInputsIntervalos>
        <div>
          <h5>Selecione o primeiro intervalo</h5>
          <div>
            <div>
              <label htmlFor="intervalo11">Início: </label>
              <input
                type="number"
                name="intervalo11"
                value={intervalo11}
                onChange={(e) => {
                  if (e.target.value.length > 5) {
                    return null;
                  }
                  setIntervalo11(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="intervalo12">Fim: </label>
              <input
                type="number"
                name="intervalo12"
                value={intervalo12}
                onChange={(e) => {
                  if (e.target.value.length > 5) {
                    return null;
                  }
                  setIntervalo12(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <h5>Selecione o segundo intervalo</h5>
          <div>
            <div>
              <label htmlFor="intervalo21">Início: </label>
              <input
                type="number"
                name="intervalo21"
                value={intervalo21}
                onChange={(e) => {
                  if (e.target.value.length > 5) {
                    return null;
                  }
                  setIntervalo21(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="intervalo12">Fim: </label>
              <input
                type="number"
                name="intervalo12"
                value={intervalo22}
                onChange={(e) => {
                  if (e.target.value.length > 5) {
                    return null;
                  }
                  setIntervalo22(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </DivInputsIntervalos>
      <ButtonSend
        active
        onClick={() => {
          checar(
            `${intervalo11},${intervalo12}`,
            `${intervalo21},${intervalo22}`
          );
        }}
      >
        Interlaçam?
      </ButtonSend>
      <h2 style={{ color: `${colorResult}` }}>{result}</h2>
    </DivInteracao1B>
  );
}
