import React, { Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";

const GuideButton = props => {
  const renderButton = () => {
    if(props.orientation === 'horizontal'){
      return <FontAwesomeIcon icon={faGripLines} />
    }else{
      return <FontAwesomeIcon icon={faGripLinesVertical} />;
    }
  }
    return (
      <Fragment>
        {props.guidesHidden ? (
          <button
            className="guide-button icon-button"
            onClick={() => props.showGuides(props.orientation)}
          >
            <div className="icon">
              {renderButton()}
            </div>
          </button>
        ) : (
          <button
            className="guide-button icon-button"
            onClick={() => props.hideGuides(props.orientation)}
          >
            <div className="icon">
              {renderButton()}
            </div>
          </button>
        )}
      </Fragment>
    );
}

export default GuideButton;