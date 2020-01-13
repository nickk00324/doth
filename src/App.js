import React, { Fragment, useState } from 'react';
import Page from './components/page'
import Settings from './components/settings';
import Guide from './components/guide';
import Modal from 'react-modal';
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import './App.css';

Modal.setAppElement('#root')

function App() {

  const [pageSize, setPageSize] = useState({
    width: 500,
    height: 700
  });

  const [verticalGuidePositions, setVerticalGuidePositions] = useState([
    pageSize.width / 2,
    pageSize.width / 2
  ])
  const [horizontalGuidePositions, setHorizontalGuidePositions] = useState([
    pageSize.height / 2,
    pageSize.height / 2
  ])

  
  const generateGuides = (orientation, isHidden) => {
    let positions = orientation === 'horizontal' ? 
      horizontalGuidePositions
      : verticalGuidePositions
    let newGuides = [];
    for (let i = 0; i < 2; i++) {
      let key = i + new Date().toISOString();
      newGuides.push(
          <Guide
          pageSize={pageSize}
          orientation={orientation}
          isHidden={isHidden}
          key={key}
          guideid={key}
          position={positions[i]}
        />
      );
      //positions.shift();
    }
    return newGuides;
  };

  const isMobileDevice = () => {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  };

  const [guidesHiddenHorizontal, setGuidesHiddenHorizontal] = useState(true);
  const [guidesHiddenVertical, setGuidesHiddenVertical] = useState(true);
  const [horizontalGuides, setHorizontalGuides] = useState(generateGuides('horizontal', true));
  const [verticalGuides, setVerticalGuides] = useState(generateGuides('vertical', true));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photo, setPhoto] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  function capturePage() {
    html2canvas(document.querySelector('.page'), { scale: 4})
      .then(canvas => {
        setPhoto(canvas.toDataURL())
    })
    openModal();
  }

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
      saveGuidePositions(orientation);
    }else {
      setVerticalGuides(generateGuides(orientation, true));
      setGuidesHiddenVertical(true);
      saveGuidePositions(orientation);
    }
  }

  function saveGuidePositions(orientation){
    let guides = document.querySelectorAll(`.guide-${orientation}`);
    let positions = [];
    if(orientation === 'horizontal'){
      guides.forEach(guide => {
        positions.push(
          guide.getBoundingClientRect().y - (window.innerHeight - pageSize.height) / 2
        )})
      setHorizontalGuidePositions(positions);
    }else{
      guides.forEach(guide => {
        positions.push(
          guide.getBoundingClientRect().x - (window.innerWidth - pageSize.width) / 2
      )})
      setVerticalGuidePositions(positions);
    }
    console.log(positions);
    console.log(horizontalGuidePositions);
    console.log(verticalGuidePositions);
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

  const customStyles = {
    content: {
      zIndex: "50",
      textAlign: "center",
      backgroundColor: "rgba(0, 151, 144, 0.644)"
    }
  };

  return (
    <Fragment>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        >
        <button className="icon-button modal-close" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
        <img className="capture-img" src={photo} height={pageSize.height} width={pageSize.width} alt='your poem silly!'/>
      </Modal>

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
        capturePage={capturePage}
      />
    </Fragment>
  );
}

export default App;
