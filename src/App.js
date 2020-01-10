import React, { Fragment, useState } from 'react';
import Page from './components/page'
import Settings from './components/settings';
import Guide from './components/guide';
import './App.css';

function App() {

  const [guidesArr, setGuidesArr] = useState([
    <Guide orientation={'vertical'} isHidden={true} />,
    <Guide orientation={'vertical'} isHidden={true} />,
    <Guide orientation={'horizontal'} isHidden={true} />,
    <Guide orientation={'horizontal'} isHidden={true} />
  ]);
  const [guidesHidden, setGuidesHidden] = useState(true);

  const hideGuides = () => {
    let hiddenGuidesArr = [
      <Guide orientation={"vertical"} isHidden={true} />,
      <Guide orientation={"vertical"} isHidden={true} />,
      <Guide orientation={"horizontal"} isHidden={true} />,
      <Guide orientation={"horizontal"} isHidden={true} />
    ];
    setGuidesArr(hiddenGuidesArr);
    setGuidesHidden(true);
  }

  const showGuides = () => {
    const visibleGuides = [
      <Guide orientation={"vertical"} isHidden={false} />,
      <Guide orientation={"vertical"} isHidden={false} />,
      <Guide orientation={"horizontal"} isHidden={false} />,
      <Guide orientation={"horizontal"} isHidden={false} />
    ];
    setGuidesArr(visibleGuides);
    setGuidesHidden(false);
  }


  return (
    <Fragment>
      <Page guides={guidesArr}/>
      <Settings showGuides={showGuides} hideGuides={hideGuides} guidesHidden={guidesHidden}/>
    </Fragment>
  );
}

export default App;
