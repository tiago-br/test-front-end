import React from 'react'
import { InputTypeString } from './style'

export default function CardInterecao1ALetras({indice, handleChange, value}) {
    return (
        <div>
            <InputTypeString type="text" value={value} pattern="[a-z\s]+$" onChange={(e)=>{handleChange(indice, e)}} />
        </div>
    )
}
