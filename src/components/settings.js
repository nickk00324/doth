import React from 'react';
import Capture from './capture';
import GuideButton from './guideButton';
import '../styles/settings.css'

const Settings = props => {
    return (
      <div>
        <Capture />
        <GuideButton
          showGuides={props.showGuides}
          hideGuides={props.hideGuides}
          guidesHidden={props.guidesHidden}
        />
      </div>
    );
}

export default Settings;