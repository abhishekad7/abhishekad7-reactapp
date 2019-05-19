import React, { Component } from 'react';
import './App.css';
import Home from "./components/home";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import About from './components/about';
import Main from './main';


class App extends Component {
  constructor(props){
    super(props);
    this.openMain = this.openMain.bind(this);
    this.openHome = this.openHome.bind(this);
    this.state = {
      nextpage: <Home main={this.openMain} />,
    };
    //this.openHome();
  }
  
  openHome(){
    this.setState({nextpage: <Home main={this.openMain} />});
  }

  openMain(){
    this.setState({nextpage: <Main home={this.openHome}/>});
  }

  render() { 
    //console.log("render");
    //console.log(this.state);
    return (
      this.state.nextpage
    );
  }
}
 
export default App;

