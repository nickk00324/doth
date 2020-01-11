import React, { Fragment, useState } from 'react';
import Page from './components/page'
import Settings from './components/settings';
import Guide from './components/guide';
import './App.css';

function App() {

  const [guidesArr, setGuidesArr] = useState([
    <Guide orientation={'vertical'} isHidden={true} key={1}/>,
    <Guide orientation={'vertical'} isHidden={true} key={2}/>,
    <Guide orientation={'horizontal'} isHidden={true} key={3}/>,
    <Guide orientation={'horizontal'} isHidden={true} key={4}/>
  ]);
  const [guidesHidden, setGuidesHidden] = useState(true);

  const hideGuides = () => {
    let hiddenGuidesArr = [
      <Guide orientation={"vertical"} isHidden={true} key={1}/>,
      <Guide orientation={"vertical"} isHidden={true} key={2}/>,
      <Guide orientation={"horizontal"} isHidden={true} key={3}/>,
      <Guide orientation={"horizontal"} isHidden={true} key={4}/>
    ];
    setGuidesArr(hiddenGuidesArr);
    setGuidesHidden(true);
  }

  const showGuides = () => {
    const visibleGuides = [
      <Guide orientation={"vertical"} isHidden={false} key={1}/>,
      <Guide orientation={"vertical"} isHidden={false} key={2}/>,
      <Guide orientation={"horizontal"} isHidden={false} key={3}/>,
      <Guide orientation={"horizontal"} isHidden={false} key={4}/>
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
