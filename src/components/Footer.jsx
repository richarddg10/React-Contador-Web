import React from "react";
 
export function Footer() {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(0deg, black, blue)',
        // border: '1px solid #000',
        borderRadius: '0 0 6px 6px',
        color: 'white',
        height: '80px'
    }

    return(
        <footer style={footerStyle}>
            <h3>Richard Delgado Garzon</h3>
        </footer>
    )
}