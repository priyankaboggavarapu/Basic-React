import React,{Component} from 'react';

class Navbar extends Component{
    constructor(){
        super();
    }
render(){
    return(
        <div>
            <nav class="navbar navbar-expand-sm bg-info navbar-dark">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </nav>

        </div>
    );

}
}
export default Navbar