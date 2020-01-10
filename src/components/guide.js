import React from 'react';
import Draggable from 'react-draggable';
import '../styles/guide.css';

const Guide = props => {

  const renderGuides = () => {
    if(props.orientation === 'vertical'){
      return (
        <Draggable axis="x" bounds="parent">
          {props.isHidden ? (
            <div className="guide-vertical" style={{ display: "none" }}></div>
          ) : (
            <div className="guide-vertical"></div>
          )}
        </Draggable>
      );
    } else {
      return (
        <Draggable axis="y" bounds="parent">
          {props.isHidden ? (
            <div className="guide-horizontal" style={{ display: "none" }}></div>
          ) : (
            <div className="guide-horizontal"></div>
          )}
        </Draggable>
      );
    }
  }
    return (
      renderGuides()
    );
}

export default Guide;