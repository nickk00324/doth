import React from 'react';
import '../styles/input.css';

const Input = props => {

    return(
        <div className="input" style={{
            position: 'absolute',
            top: `${props.editLocation.y}px`,
            left: `${props.editLocation.x}px`
        }}>
            <input type="text" className="input-text" onChange={props.handleInput}></input>
            <button className="input-button" onClick={props.doneEditing}>add</button>
        </div>     
    )
}

export default Input;