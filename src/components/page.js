import React from 'react';
import Text from './text';
import Input from './input';
import Guide from './guide';
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
    }

    editLine(e){
        if(!this.state.isEditing){
            this.setState({ isEditing: true })
            this.setState({
                editLocation: {
                    x: e.clientX - ((window.innerWidth - 500) / 2),
                    y: e.clientY - ((window.innerHeight - 700) / 2)
                }
             })
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
                    let editedLine = this.state.pendingLine;
                    console.log(editedLine);
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

    addLine(text){
        if(text.trim() !== ''){
            let newKey = new Date().toISOString();
            this.setState({ lines: {
                ...this.state.lines, 
                [newKey]: <Text 
                    editText={this.editText} 
                    editLocation={this.state.editLocation}
                    key={newKey}
                    textId={newKey}
                >{text}</Text>
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
                    <hr></hr>
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