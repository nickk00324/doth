import React, { Fragment, useState } from 'react';
import Page from './components/page'
import Settings from './components/settings';
import Guide from './components/guide';
import './App.css';

function App() {

  const onGuideStop = () => {
    console.log("hello");
  };

  const generateGuides = (orientation, isHidden) => {
    let newGuidesArr = [];
    for (let i = 0; i < 2; i++) {
      let key = i + new Date().toISOString();
      newGuidesArr.push(
        <Guide
          pageSize={pageSize}
          orientation={orientation}
          isHidden={isHidden}
          key={key}
          onGuideStop={onGuideStop}
        />
      );
    }
    return newGuidesArr;
  };

  const isMobileDevice = () => {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  };

  const [pageSize, setPageSize] = useState({
    width: 500,
    height: 700
  });


  const [guidesHiddenHorizontal, setGuidesHiddenHorizontal] = useState(true);
  const [guidesHiddenVertical, setGuidesHiddenVertical] = useState(true);
  const [horizontalGuides, setHorizontalGuides] = useState(generateGuides('horizontal', true));
  const [verticalGuides, setVerticalGuides] = useState(generateGuides('vertical', true));

  React.useEffect(() => {
    if(isMobileDevice()){
      setPageSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  }, [])

  const hideGuides = (orientation) => {
    if(orientation === 'horizontal'){
      setHorizontalGuides(generateGuides(orientation, true));
      setGuidesHiddenHorizontal(true);
    }else {
      setVerticalGuides(generateGuides(orientation, true));
      setGuidesHiddenVertical(true);
    }
    console.log(horizontalGuides[0].props)
  }

  const showGuides = (orientation) => {
    if(orientation === 'horizontal'){
      setHorizontalGuides(generateGuides(orientation, false));
      setGuidesHiddenHorizontal(false);
    }else {
      setVerticalGuides(generateGuides(orientation, false));
      setGuidesHiddenVertical(false);
    }
  }

  const changePageSize = (width, height) => {
    setPageSize({
      width,
      height
    })
  }

  return (
    <Fragment>
      <Page
        pageSize={pageSize}
        horizontalGuides={horizontalGuides}
        verticalGuides={verticalGuides}
      />
      <Settings
        pageSize={pageSize}
        showGuides={showGuides}
        hideGuides={hideGuides}
        guidesHiddenHorizontal={guidesHiddenHorizontal}
        guidesHiddenVertical={guidesHiddenVertical}
      />
    </Fragment>
  );
}

export default App;
