import React from 'react';
import Text from './text';
import Input from './input';
import '../styles/page.css';

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lines: [],
            isEditing: false,
            editValue: '',
            editLocation: {
                x: '',
                y: ''
            }
        }
        this.editLine = this.editLine.bind(this);
        this.doneEditing = this.doneEditing.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.editText = this.editText.bind(this);
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
            console.log(this.state.editLocation);
        }   
    }

    editText(e){
        e.stopPropagation();

        console.log(e.target.getAttribute('textid'));
        const selectedText = this.state.lines.find(
          text => text.key === e.target.getAttribute("textid")
        );
        this.setState({editValue: selectedText.props.children});
        this.setState({isEditing: true});
    }

    doneEditing(){
        this.setState({isEditing: false})
        this.addLine(this.state.editValue);
        this.setState({editValue: ''})
    }

    addLine(text){
        if(text.trim() !== ''){
            this.setState({ lines: [
                ...this.state.lines, 
                <Text 
                    editText={this.editText} 
                    editLocation={this.state.editLocation}
                    key={new Date().toISOString()}
                    textId={new Date().toISOString()}
                >{text}</Text>
            ] })
        }    
    }

    handleInput(e){
        this.setState({editValue: e.target.value})
    }

    render(){
        return(         
                <div className="page" onDoubleClick={this.editLine} style={{marginTop: (window.innerHeight - 700) / 2 }}>
                    {this.state.lines}
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