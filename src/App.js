import React, { Fragment, useState } from 'react';
import Page from './components/page'
import Settings from './components/settings';
import Guide from './components/guide';
import './App.css';

function App() {

  const [guidesArr, setGuidesArr] = useState([
    <Guide isHidden={true} />,
    <Guide isHidden={true} />
  ]);
  const [guidesHidden, setGuidesHidden] = useState(true);

  const hideGuides = () => {
    let hiddenGuidesArr = [<Guide isHidden={true} />, <Guide isHidden={true} />];
    setGuidesArr(hiddenGuidesArr);
    setGuidesHidden(true);
  }

  const showGuides = () => {
    const visibleGuides = [<Guide />, <Guide />];
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
