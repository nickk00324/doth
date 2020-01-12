import React from 'react';
import Draggable from 'react-draggable';
import '../styles/guide.css';

const Guide = props => {


  const renderGuides = () => {
    if(props.orientation === 'vertical'){
      return (
        <Draggable axis="x" bounds="parent" onStop={props.onGuideStop}>
          {props.isHidden ? (
            <div
              className="guide-vertical"
              style={{
                display: "none",
                height: `${props.pageSize.height}px`,
                left: `${props.pageSize.width / 2}px`
              }}
            ></div>
          ) : (
            <div
              className="guide-vertical"
              style={{
                height: `${props.pageSize.height}px`,
                left: `${props.pageSize.width / 2}px`
              }}
            ></div>
          )}
        </Draggable>
      );
    } else {
      return (
        <Draggable axis="y" bounds="parent" onStop={props.onGuideStop}>
          {props.isHidden ? (
            <div
              className="guide-horizontal"
              style={{
                display: "none",
                width: `${props.pageSize.width}px`,
                top: `${props.pageSize.height / 2}px`
              }}
            ></div>
          ) : (
            <div
              className="guide-horizontal"
              style={{
                width: `${props.pageSize.width}px`,
                top: `${props.pageSize.height / 2}px`
              }}
            ></div>
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