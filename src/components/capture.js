import React from 'react';
import html2canvas from 'html2canvas';

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
        return(
            <button onClick={this.capturePage}>capture</button>
        )
    }
}

export default Capture;