import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Count from './components/count';
import Test from './components/test';
import Axios from './components/axios'

class App extends Component {
  constructor(){
    super();
    this.state={
      addno:['+2','+22','+222'],
      subno:['-2','-22','-222'],
      count:0,
      
  }
  this.numberreg =/^[0-9]+$/;
  this.letterreg=/^[a-zA-Z]+$/;
}


 increment=(incno)=>{
   this.setState
   ({count:this.state.count+incno})

 }
 decrement=(decno)=>{
   this.setState
   ({
     count:this.state.count-decno
   })
   
 }
 
 
  configurefooter={
    footerdata:["Mapsite","aboutus","contactnumber","sdkj"]
  }
  render() 
  {
    return (
      

      <div className="App">
      
      <Navbar/>
      
      <Test regex={this.numberreg}/>
      <Test regex={this.letterreg}/>
      <Count btnctrl={this.increment}  incno={2} buttonName={this.state.addno[0]}/>
      <Count btnctrl={this.increment}  incno={22} buttonName={this.state.addno[1]}/>
      <Count btnctrl={this.increment}  incno={222} buttonName={this.state.addno[2]}/>
      <Count btnctrl={this.decrement} decno={2} buttonName={this.state.subno[0]}/>
      <Count btnctrl={this.decrement} decno={22} buttonName={this.state.subno[1]}/>
      <Count btnctrl={this.decrement} decno={222} buttonName={this.state.subno[2]}/>
      {this.state.count}
      <Axios />
      
      <Footer footeritems={this.configurefooter.footerdata}/>
      
      
       
      </div>
            );
    }
  }


export default App;
