import React, { Component } from 'react';
import './App.css';
import Home from "./components/home";
import Main from './components/main';
import { Route, HashRouter as Router } from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props);
    this.openMain = this.openMain.bind(this);
    this.openHome = this.openHome.bind(this);
    this.state = {
      nextpage: <Home main={this.openMain} />,
    };
  }



  openHome(){
    this.setState({nextpage: <Home main={this.openMain} />});
  }

  openMain(){
    this.setState({nextpage: <Main home={this.openHome}/>});
  }

  render() { 
    
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/ex" component={Main} />
      </Router>
    );
  }
}
 
export default App;

