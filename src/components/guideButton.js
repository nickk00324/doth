import React, { Fragment } from 'react';

const GuideButton = props => {
    return (
      <Fragment>
        {props.guidesHidden ? (
          <button className="guide-button" onClick={props.showGuides}>show guides</button>
        ) : (
          <button className="guide-button" onClick={props.hideGuides}>hide guides</button>
        )}
      </Fragment>
    );
}

export default GuideButton;