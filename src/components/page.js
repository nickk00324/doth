import React from 'react';
import Text from './text';
import Input from './input';
import '../styles/page.css';

import {
    ADD_LINE,
    EXIT,
    REMOVE_LINE
} from '../util/editingTypes';

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lines: {},
            isEditing: false,
            editValue: '',
            pendingLine: '',
            currentDraggedLine: '',
            editLocation: {
                x: '',
                y: ''
            }
        }
        this.editLine = this.editLine.bind(this);
        this.doneEditing = this.doneEditing.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.editText = this.editText.bind(this);
        this.addLine = this.addLine.bind(this);
        this.generateKey = this.generateKey.bind(this);
        this.onStop = this.onStop.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    onStop(){
        if(this.state.currentDraggedLine){
            const updatedLine = this.createText(
                this.state.currentDraggedLine.props.children,
                this.state.currentDraggedLine.key
            );
            this.setState({
                lines: {
                    ...this.state.lines,
                    [updatedLine.key]: updatedLine
                },
                currentDraggedLine: '',
            })
        }
    }

    handleDrag(e){
        if(!this.state.currentDraggedLine){
            this.setState({
                currentDraggedLine: this.state.lines[e.target.getAttribute("textid")],
            })
        }
    }

    editLine(e){
        if(!this.state.isEditing){
            this.setState({ isEditing: true })
            console.log(e.target)
            if(e.target.getAttribute('class') === 'page'){
                this.setState({
                  editLocation: {
                    x: e.clientX - (window.innerWidth - 500) / 2,
                    y: e.clientY - (window.innerHeight - 700) / 2
                  }
                });
            }else {
                this.setState({
                  editLocation: {
                    x: e.target.offsetLeft,
                    y: e.target.offsetTop
                  }
                });
            }   
        }   
    }

    editText(e){
        e.stopPropagation();
        this.editLine(e);
        const selectedText = this.state.lines[e.target.getAttribute("textid")];
        this.setState({pendingLine: selectedText});
        this.setState({lines: {...this.state.lines, [e.target.getAttribute('textid')]: ''}})
        this.setState({editValue: selectedText.props.children});  
    }

    doneEditing(type){
        switch(type){
            case ADD_LINE:
                this.addLine(this.state.editValue); 
                break;
            case EXIT:
                if(this.state.pendingLine){
                    let editedLine = this.createText(this.state.editValue, this.state.pendingLine.key)
                    this.setState({
                        lines: {
                            ...this.state.lines,
                            [this.state.pendingLine.key]: editedLine
                        }
                    });
                }
                this.setState({pendingLine: ''});
                break;
            case REMOVE_LINE:
                this.setState({
                   lines: {
                       ...this.state.lines,
                        [this.state.pendingLine.key]: ''
                   } 
                })
                this.setState({ pendingLine: '' });
                break;
            default:
        }

        this.setState({isEditing: false})
        this.setState({editValue: ''})
        this.setState({pendingLine: ''})
    }

    createText(text, key, location){
        const newKey = key? key : this.generateKey();
        const newLocation = location? location : this.state.editLocation;
        return (
          <Text
            editText={this.editText}
            editLocation={newLocation}
            onStop={this.onStop}
            handleDrag={this.handleDrag}
            key={newKey}
            textId={newKey}
          >{text}</Text>
        );
    }

    generateKey(){
        return new Date().toISOString();
    }

    addLine(text){
        if(text.trim() !== ''){
            const newKey = this.generateKey();
            this.setState({ lines: {
                ...this.state.lines, 
                [newKey]: this.createText(text, newKey)
            }})
        }   
    }

    handleInput(e){
        this.setState({editValue: e.target.value})
    }

    render(){
        return(         
                <div className="page" onDoubleClick={this.editLine} style={{marginTop: (window.innerHeight - 700) / 2 }}>
                    {Object.values(this.state.lines)}
                    {this.props.guides}
                    {this.state.isEditing ?
                        <Input
                            doneEditing={this.doneEditing}
                            handleInput={this.handleInput}
                            editValue={this.state.editValue}
                            editLocation={this.state.editLocation}
                        />
                        : ''
                    }
                </div>  
        )   
    }
}

export default Page;