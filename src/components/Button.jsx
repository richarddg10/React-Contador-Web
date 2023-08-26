import React from 'react'

export function Button ({ interaction, label }) {

    const buttonStyle = {
        backgroundColor: 'red',
        borderRadius: '3px'
    }

    return (
        <>
            <button style={buttonStyle} onClick={interaction}>{ label }</button>
        </>
    )
}