import React from "react";
import { InputTypeString } from "./style";

export default function CardInterecao1ALetras({ indice, handleChange, value }) {
  return (
    <div>
      <InputTypeString
        type="text"
        value={value}
        onChange={(e) => {
          handleChange(indice, e);
        }}
      />
    </div>
  );
}
