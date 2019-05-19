import React, { Component } from 'react';
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

class Main extends Component {

    constructor(props){
        super(props);
        this.openAbout = this.openAbout.bind(this);
        this.openProjects = this.openProjects.bind(this);
        this.openContact = this.openContact.bind(this);
        this.state = {
            nextSection: <About />,
        }
    }

    openAbout(){
        this.setState({nextSection: <About/>});
    }

    openProjects(){
        this.setState({nextSection: <Projects />})
    }

    openContact(){
        this.setState({nextSection: <Contact />})
    }

    render() { 
        return (
            <div>
                <div id="nav-menu" className="">
                    <div>
                        <li onClick={this.props.home}>
                           Home
                        </li>
                        <li onClick={this.openAbout}>
                            About
                        </li>

                        <li onClick={this.openProjects}>
                           Projects
                        </li>

                        <li onClick={this.openContact}>
                            Contact
                        </li>
                    </div>
                </div>

                <div id="content" className="">
                    {this.state.nextSection}
                </div>
            </div>
        );
    }
}
 
export default Main;