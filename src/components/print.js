import React from 'react';

class Print extends React.Component{
    constructor(props){
        super(props);

        this.printPoem = this.printPoem.bind(this);
    }

    printPoem(){
        
    }

    render(){
        return(
            <button onClick={this.printPoem}>print</button>
        )
    }
}

export default Print