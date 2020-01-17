import React, { Fragment, useState } from 'react';
import Page from './components/page'
import Settings from './components/settings';
import Guide from './components/guide';
import Title from './components/title';
import Modal from 'react-modal';
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { isMobileDevice } from './util/isMobileDevice';
import './App.css';

Modal.setAppElement('#root');

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
    }
    return newGuides;
  };

  const [guidesHiddenHorizontal, setGuidesHiddenHorizontal] = useState(true);
  const [guidesHiddenVertical, setGuidesHiddenVertical] = useState(true);
  const [horizontalGuides, setHorizontalGuides] = useState(generateGuides('horizontal', true));
  const [verticalGuides, setVerticalGuides] = useState(generateGuides('vertical', true));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photo, setPhoto] = useState('');
  const [page, setPage] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  function capturePage() {
      html2canvas(document.querySelector('.page'), { scale: 4 })
        .then(canvas => {
          setPhoto(canvas.toDataURL())
        })
    openModal();
  }

  React.useEffect(() => {
    if(isMobileDevice()){
      let settings = document.querySelector('.settings');
      let offset = settings.offsetHeight;
      let mobileDimensions = {
        width: window.innerWidth - 25,
        height: window.innerHeight - offset - 30 - 20
      }
      setPageSize(mobileDimensions);
      setVerticalGuidePositions([mobileDimensions.width / 2, mobileDimensions.width / 2]);
      setHorizontalGuidePositions([mobileDimensions.height/ 2, mobileDimensions.height / 2])
      Modal.defaultStyles.overlay.width = `${window.innerWidth}px`;
      Modal.defaultStyles.overlay.height = `${window.innerHeight}px`;
    }
    let page = document.querySelector('.page');
    setPage(page);
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
          guide.getBoundingClientRect().y - page.getBoundingClientRect().y
        )})
      setHorizontalGuidePositions(positions);
    }else{
      guides.forEach(guide => {
        positions.push(
          guide.getBoundingClientRect().x - page.getBoundingClientRect().x
      )})
      setVerticalGuidePositions(positions);
    }
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

  const modalStyles = isMobileDevice()? {
    content: {
      width: `${pageSize.width}px`,
      height: `${pageSize.height}px`,
      margin: '0 auto',
      padding: '0',
      position: 'absolute',
      left: `13px`
    }
  }
  :
  {
    content: {
      width: `${pageSize.width + 50}px`,
      height: `${pageSize.height + 50}px`,
      margin: `40px auto`,
      padding: '0',
      display: 'flex'
    }
  };

  Modal.defaultStyles.overlay.backgroundColor = 'pink'

  return (
    <Fragment>
      <Title />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        transparent={true}
        style={modalStyles}
        portalClassName="modal"
      >
        {isMobileDevice() ? (
          <img
            className="capture-img"
            src={photo}
            width={`${pageSize.width}px`}
            alt="your poem silly!"
          />
        ) : (
          <img
            className="capture-img"
            src={photo}
            height={`${pageSize.height}px`}
            width={`${pageSize.width}px`}
            alt="your poem silly!"
          />
        )}
        <button className="icon-button modal-close" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
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
