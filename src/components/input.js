import React from 'react';
import '../styles/input.css';

const Input = props => {

    return(
        <div className="input" style={{
            position: 'absolute',
            top: `${props.editLocation.y}px`,
            left: `${props.editLocation.x}px`
        }}>
            <textarea value={props.editValue} className="input-text" onChange={props.handleInput}></textarea>
            <button className="input-button add-button" onClick={props.doneEditing}>add</button>
            <button className="input-button exit-button" onClick={props.doneEditing}>exit</button>
        </div>     
    )
}

export default Input;