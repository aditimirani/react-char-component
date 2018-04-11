import React from 'react'


const CharComponent = ({deleteChar,charVal}) => { //using distructing to pickup value from props
    
    //adding inline style
    const boxstyle= {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    return(
        <React.Fragment>
            <div style={boxstyle} onClick={deleteChar}>{charVal}</div>
            </React.Fragment>
    )
}
export default CharComponent