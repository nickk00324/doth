import React from 'react';
import Draggable from 'react-draggable';

import '../styles/text.css';

class Text extends React.Component{

    render(){
        const dragHandlers = {onStop: this.props.onStop, onDrag: this.props.handleDrag}
        return(
                <Draggable bounds="parent" {...dragHandlers}>
                    <div
                        textid={this.props.textId}
                        className="text"
                        onDoubleClick={this.props.editText}
                        style={{
                            position: 'absolute',
                            top: this.props.editLocation ? `${this.props.editLocation.y}px` : '0px',
                            left: this.props.editLocation ? `${this.props.editLocation.x}px` : '0px',
                        }}
                    >{this.props.children}</div>
                </Draggable>      
        )
    }
}

export default Text;