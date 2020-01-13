import React from 'react';
import Capture from './capture';
import GuideButton from './guideButton';
import Print from './print';
import '../styles/settings.css'

const Settings = props => {

    return (
      <div className="settings" style={{ width: `${props.pageSize.width}px` }}>
        <Print />
        <Capture capturePage={props.capturePage}/>
        <GuideButton
          showGuides={props.showGuides}
          hideGuides={props.hideGuides}
          guidesHidden={props.guidesHiddenVertical}
          orientation={"vertical"}
        />
        <GuideButton
          showGuides={props.showGuides}
          hideGuides={props.hideGuides}
          guidesHidden={props.guidesHiddenHorizontal}
          orientation={"horizontal"}
        />
      </div>
    );
}

export default Settings;