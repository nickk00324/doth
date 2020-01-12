import React, { Fragment } from 'react';
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

class Capture extends React.Component{

    constructor(props){
        super(props)

        this.capturePage = this.capturePage.bind(this);
    }

    capturePage() {
        html2canvas(document.querySelector('.page'))
         .then(canvas => {
             document.body.appendChild(canvas);
         })
    }
    render(){
        return (
          <Fragment>
            <button onClick={this.capturePage} className="capture-button icon-button">
              <div className="icon">
                <FontAwesomeIcon icon={faCameraRetro} />
              </div>
            </button>
          </Fragment>
        );
    }
}

export default Capture;