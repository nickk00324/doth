import React, { useState } from 'react';
import '../styles/title.css';

const Title = () => {

    const [isHidden, setIsHidden] = useState(false);

    const handleClick = () => {
        setIsHidden(true);
    }
    return (
        <div className="title" onClick={handleClick} style={ isHidden? {display: 'none'} : {display: 'flex'}}>
            <h1>doth.</h1>
            <div className="instructions">
                <p>double click to add line, or edit line</p>
                <p>click drag to move lines/guides</p>
                <p>capture to generate image file, right click and save</p>
                <p>have fun!</p>
            </div>
        </div>
    )
}

export default Title;

        
