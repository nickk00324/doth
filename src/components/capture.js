import React, { Fragment } from 'react';
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

const Capture = props => {
        return (
          <Fragment>
            <button onClick={props.capturePage} className="capture-button icon-button">
              <div className="icon">
                <FontAwesomeIcon icon={faCameraRetro} />
              </div>
            </button>
          </Fragment>
        );
}

export default Capture;