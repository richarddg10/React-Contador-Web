import React from 'react'

export function Header ({ title }) {

    const componentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(0deg, black, blue)',
        border: '1px solid #000',
        borderRadius: '6px',
        color: 'white',
        width: '500px',
        height: '100px'
    }

    return (
        <>
            <header>
                <h1 style={componentStyle} className="main-title"> { title } </h1>
            </header>
        </>
    )
}