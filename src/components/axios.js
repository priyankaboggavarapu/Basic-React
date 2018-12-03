import React, {Component} from 'react'
import Axios from 'axios';

class Axios extends Component{
    constructor(){
        super();
        this.state={
            name:""
        }

    }
    componentDidMount(){
           Axios.get("https://restcountries.eu/rest/v2/all")
           .then(result=>{
                   console.log(result)
                   this.setState({
                       name:result.data[1].name
                   })

           })
           .catch(err=>{
               console.log(err)
           })    
    }
    render() {
    return(
        <div>data coming through api------>{this.state.name}

        </div>
    );
}
}
   
export default Axios;
