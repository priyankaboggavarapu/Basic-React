import React, {Component} from 'react'

class Count extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //     count:0
    //     }
    //     this.increment=this.increment.bind(this);
    //     this.decrement=this.decrement.bind(this);
    // }
      

    // increment(){
    //     this.setState({
    //         count:++this.state.count
    //     })
    // }


    // decrement(){
    //     this.setState({
    //         count:--this.state.count
    //     })
    // }
    render(){
        return(
            <div>
                {/* <div>
                <button onClick={this.increment}>++</button>
                <span>{this.state.count}</span>
                <button onClick={this.decrement}>--</button>
                </div> */}

                <button onClick={()=>{this.props.btnctrl(this.props.incno)}}>{this.props.buttonName}</button>
               
            </div>
        );
    }
}
export default Count