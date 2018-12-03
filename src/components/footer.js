import React, {Component} from 'react';

class Footer extends Component{
    constructor(){
        super();
       
    }

    render(){
        return(
          <div className="container">
              {/* <nav className="navbar navbar-expand-sm bg-light navbar-dark" >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a >AboutUS</a>
                </li>
                <li className="nav-item">
                  <a >Contact us</a>
                </li>
                <li className="nav-item">
                  <a >Root Map</a>
                </li>
                
              </ul>
            </nav> */}
            <div className="row">{this.props.footeritems.map(
                (item,i) =>{
                return<div className="col-md">{i+1}--> {item}</div>
            }
            )}</div>
          </div>
        );

    }
}
export default Footer
