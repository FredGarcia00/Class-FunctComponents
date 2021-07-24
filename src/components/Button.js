import React from 'react'

function Button(props) {
    let buttonRef = React.createRef();

    console.log(buttonRef);
    return (
        <button 
        ref={buttonRef}
        id="button"
        style=
        {{
            background:'black',
            color:'white',
            fontSize:'1.3rem',
            padding: '10px 20px'
        }}>
            {props.children}
        </button>
    )
}

export default Button
