import React, { Component } from 'react';
import './App.css';
import Home from "./components/home";
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Main from './components/main';


class App extends Component {
  constructor(props){
    super(props);
    this.openMain = this.openMain.bind(this);
    this.openHome = this.openHome.bind(this);
    this.state = {
      nextpage: <Home main={this.openMain} />,
    };
  }
  
  componentDidMount(){
    //this.openMain();
  }

  openHome(){
    this.setState({nextpage: <Home main={this.openMain} />});
  }

  openMain(){
    this.setState({nextpage: <Main home={this.openHome}/>});
  }

  render() { 
    
    return (
      this.state.nextpage
    );
  }
}
 
export default App;

