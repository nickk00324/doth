import React from 'react';
import Draggable from 'react-draggable';
import '../styles/guide.css';

const Guide = props => {
    return (
      <Draggable axis="x" bounds="parent">
        {props.isHidden? <div className="guide" style={{display: 'none'}}></div>
        :
        <div className="guide"></div>
        }
      </Draggable>
    );
}

export default Guide;