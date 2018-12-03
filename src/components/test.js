import React, {Component} from  'react';

class Text extends Component {
    constructor(props){
        super(props);
        this.state={
            letter:""
        }
        this.handleKeypress = this.handleKeypress.bind(this);
        this.inputhandle=this.inputhandle.bind(this);
    }
    handleKeypress(e){

      let num = new RegExp(this.props.regex);
         if(!num.test(e.key)){
             e.preventDefault();
         }
    }
      inputhandle(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return (
            <div>
           <input type="text" name="letter" value={this.state.letter} onChange={this.inputhandle} onKeyPress={this.handleKeypress}></input>
           <p>{this.state.letter}</p>
           </div>
        )            
    }
}

export default Text;