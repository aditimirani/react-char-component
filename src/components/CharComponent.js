import React from 'react'

const CharComponent = (props) => {
    const boxstyle= {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    return(
        <React.Fragment>
            <div style={boxstyle} onClick={props.deleteChar}>{props.charVal}</div>
            </React.Fragment>
    )
}
export default CharComponent