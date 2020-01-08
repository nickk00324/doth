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

    doneEditing(){
        this.setState({isEditing: false})
        this.addLine(this.state.editValue);
        this.setState({editValue: ''})
    }

    addLine(text){
        if(text.trim() !== ''){
            this.setState({ lines: [
                ...this.state.lines, 
                <Text editLocation={this.state.editLocation}>{text}</Text>
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
                            editLocation={this.state.editLocation}
                        />
                        : ''
                    }
                </div>  
        )   
    }
}

export default Page;