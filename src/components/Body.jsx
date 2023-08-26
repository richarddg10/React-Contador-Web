import React, { useState } from 'react'
import { Button, Counter } from './index'

export function Body() {
    const mainStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '60px',
        alignItems: 'center',
        background: 'linear-gradient(0deg, blue, black)',
        // border: '1px solid #000',
        borderRadius: '6px 6px 0 0',
        color: 'white',
        height: '80px'
    }

    const textStyle = {
        fontSize: '2em'
    }

    const [value, setValue] = useState(0)

    const sumar = () => {
        setValue(value +1)
    }

    const restar = () => {
        setValue(value > 0 ? value -1 : value)
    }

    console.log(value)

    return (
        <>
            <main style={mainStyle}>
                <Button interaction={restar} label='-'/>
                <Counter style={textStyle} text={value}/>
                <Button interaction={sumar} label='+'/>
            </main>
        </>
    )
}
