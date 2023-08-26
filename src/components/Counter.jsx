import React from 'react'

export function Counter ({ text }) {

    const textStyle = {
        fontSize: '2em'
    }
    
    return (
        <>
            <h1 style={textStyle} className="body-text">{ text }</h1>
        </>
    )
}