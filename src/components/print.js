import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const Print = props => (
    <button className="print-button icon-button" onClick={window.print}>
        <div className="icon"><FontAwesomeIcon icon={faPrint} /></div>
    </button>
)

export default Print