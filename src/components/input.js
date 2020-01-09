import React from 'react';
import '../styles/input.css';

import {
    ADD_LINE,
    EXIT,
    REMOVE_LINE
} from '../util/editingTypes';

const Input = props => {

    const handleEnter = e => {
        if(e.charCode === 13) props.doneEditing(ADD_LINE);
    }

    return(
        <div className="input" onKeyPress={handleEnter}
            style={{
            position: 'absolute',
            top: `${props.editLocation.y}px`,
            left: `${props.editLocation.x}px`
        }}>
            <textarea autoFocus value={props.editValue} className="input-text" onChange={props.handleInput}></textarea>
            <button className="input-button add-button" onClick={() => props.doneEditing(ADD_LINE)}>add</button>
            <button className="input-button exit-button" onClick={() => props.doneEditing(EXIT)}>exit</button>
            <button className="input-button remove-button" onClick={() => props.doneEditing(REMOVE_LINE)}>remove</button>
        </div>     
    )
}

export default Input;