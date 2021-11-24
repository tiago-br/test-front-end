import React from 'react'
import { InputTypeNumber } from './style'

export default function CardInteracao1A({indice, handleChange, value}) {
    return (
        <div>
            <InputTypeNumber type="number"  value={value} onChange={(e)=>{handleChange(indice, e)}} step="1"/>
        </div>
    )
}
