import React, { useState } from "react";
import axios from "axios";
import {
  ButtonAddField,
  ButtonSend,
  DivInteracoesA,
  DivInteracoesALetras,
  DivInteracoesANumeros,
  Listas,
  TituloInteracao,
} from "./style";
import CardInteracao1A from "./CardInteracao1A";
import CardInterecao1ALetras from "./CardInterecao1ALetras";

// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       nome: 'Victor',
//       sobrenome: 'Nogueira'
//     }
//   });
const ordernarListas = async (salaN, salaS) => {
  const payload = {
    listas: {
      salaN,
      salaS,
    },
  };
  const { data: listasOrdenadas } = await axios.post(
    "http://localhost:8080/ordenaLista",
    payload
  );
  return listasOrdenadas;
};

const Interacao1A = () => {
  const [resultListas, setResultListas] = useState(false);
  const [listaN, setListaN] = useState([""]);
  const [listaS, setListaS] = useState([""]);
  const [textErr, setTextErr] = useState("");
  const [colorMsg, setColorMsg] = useState("");

  function handleOnChangeNumber(indice, event) {
    event.preventDefault();
    const { value } = event.target;
    const copyLista = [...listaN];
    copyLista.splice(indice, 1, Number(value));
    setListaN(copyLista);
  }
  function addInputNumber() {
    setListaN([...listaN, ""]);
  }
  function rmvInputNumber() {
    if (listaN.length === 1) return null;
    const copyLista = [...listaN];
    copyLista.pop();
    setListaN(copyLista);
  }
  function addInputString() {
    setListaS([...listaS, ""]);
  }
  function rmvInputString() {
    if (listaS.length === 1) return null;
    const copyLista = [...listaS];
    copyLista.pop();
    setListaS(copyLista);
  }

  function handleOnChangeString(indice, event) {
    event.preventDefault();
    const { value } = event.target;
    const regexp = /[^a-zA-Z]/g;
    if (value.match(regexp) || value.length >= 6) {
      return null;
    }
    const copyLista = [...listaS];
    copyLista.splice(indice, 1, value);
    setListaS(copyLista);
  }
  async function handleSubmitListas(numeros, letras) {
    if (numeros.includes("")) {
      setColorMsg("red");
      setTextErr("Lista de NÚMEROS com valores não preenchidos!");
    } else if (letras.includes("")) {
      setColorMsg("red");
      setTextErr("Lista de LETRAS com valores não preenchidos!");
    } else {
      const lista = await ordernarListas(numeros, letras);
      setColorMsg("green");
      setTextErr("Listas ordernadas com sucesso!");
      setResultListas(lista);
    }
    setTimeout(() => {
      setTextErr("");
    }, 2000);
  }
  
  return (
    <div style={{height:"80vh"}}>
      <TituloInteracao>Interação 1 - A</TituloInteracao>
      <DivInteracoesA>
        <DivInteracoesANumeros>
          <h4>Lista de números para ordernar</h4>
          <section>
            {listaN.map((e, i) => (
              <CardInteracao1A
                key={`${i}listaN`}
                value={e}
                indice={i}
                handleChange={handleOnChangeNumber}
              />
            ))}
          </section>
          <div>
            <ButtonAddField onClick={addInputNumber}>+</ButtonAddField>
            <ButtonAddField onClick={rmvInputNumber}>-</ButtonAddField>
          </div>
        </DivInteracoesANumeros>
        <DivInteracoesALetras>
          <h4>Lista de letras para ordernar</h4>
          <section>
            {listaS.map((e, i) => (
              <CardInterecao1ALetras
                key={`${i}listaS`}
                value={e}
                indice={i}
                handleChange={handleOnChangeString}
              />
            ))}
          </section>
          <div>
            <ButtonAddField onClick={addInputString}>+</ButtonAddField>
            <ButtonAddField onClick={rmvInputString}>-</ButtonAddField>
          </div>
        </DivInteracoesALetras>
      </DivInteracoesA>
      <ButtonSend
        active
        onClick={() => {
          handleSubmitListas(listaN, listaS);
        }}
      >
        Ordernar listas
      </ButtonSend>
      <p>
        <strong style={{ color: `${colorMsg}` }}>{textErr}</strong>
      </p>
      {resultListas && (
        <Listas>
          <div>
            <h4>Lista numérica em ordem crescente:</h4>
            <div>
              {resultListas.listas.salaN.map((e, i, arr) => {
                let simbol = "<";
                if (e === arr[i+1]) {
                  simbol = "<=";
                }
                if (arr.length - 1 === i) {
                  simbol = "";
                }

                return (
                  <strong key={`${i},${e}listaN`}>
                    {e} {simbol}{" "}
                  </strong>
                );
              })}
            </div>
          </div>
          <div>
            <h4>Lista de letras em ordem alfabética:</h4>
            <div>
              {resultListas.listas.salaS.map((e, i, arr) =>{
                let simbol = "<";
                if (arr.length - 1 === i) {
                  simbol = "";
                }
                if (e === arr[i+1]) {
                  simbol = "=";
                }
                return <strong key={`${i},${e}listaN`}>{e} {" "}{simbol}{" "}</strong>}
              )}
            </div>
          </div>
        </Listas>
      )}
    </div>
  );
};

export default Interacao1A;
