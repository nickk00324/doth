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
              className="guide-vertical guide"
              onClick={props.selectGuide}
              guideid={props.guideid}
              style={{
                display: "none",
                height: `${props.pageSize.height}px`,
                left: `${props.position}px`
              }}
            ></div>
          ) : (
            <div
              className="guide-vertical guide"
              onClick={props.selectGuide}
              guideid={props.guideid}
              style={{
                height: `${props.pageSize.height}px`,
                left: `${props.position}px`
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
              className="guide-horizontal guide"
              onClick={props.selectGuide}
              guideid={props.guideid}
              style={{
                display: "none",
                width: `${props.pageSize.width}px`,
                top: `${props.position}px`
              }}
            ></div>
          ) : (
            <div
              className="guide-horizontal guide"
              onClick={props.selectGuide}
              guideid={props.guideid}
              style={{
                width: `${props.pageSize.width}px`,
                top: `${props.position}px`
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