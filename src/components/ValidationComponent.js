import React from 'react'

const ValidationComponent = ({textLength}) =>{ 
    const style ={
        fontWeight:'bold'
    }
    return(
        <React.Fragment>
            {textLength > 5 ? <p style={style}>Text is long enough</p> : <p style={style}>Text is too short</p>}
        </React.Fragment>
    )
}
export default ValidationComponent