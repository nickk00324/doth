import React from 'react';
import Capture from './capture';
import Print from './print';

const Settings = props => {
    return (
      <div>
        <Capture />
        {props.guidesHidden ? (
          <button onClick={props.showGuides}>show guides</button>
        ) : (
          <button onClick={props.hideGuides}>hide guides</button>
        )}
      </div>
    );
}

export default Settings;