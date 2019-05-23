import React, { Component } from 'react';
import './main.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';


class Main extends Component {

    activeColor = "#ff0077";
    inactiveColor = "#fff";

    constructor(props){
        super(props);
        this.openAbout = this.openAbout.bind(this);
        this.openProjects = this.openProjects.bind(this);
        this.openContact = this.openContact.bind(this);
        this.state = {
            nextSection: <About />,
            aboutColor: this.activeColor,
            projectColor: this.inactiveColor,
            contactColor: this.inactiveColor,
        }
    }

    componentDidMount(){
        //console.log("huha");
        //this.openContact();
    }

    openAbout(){
        this.setState({
            nextSection: <About />,
            aboutColor: this.activeColor,
            projectColor: this.inactiveColor,
            contactColor: this.inactiveColor,
        });
    }

    openProjects(){
        this.setState({
            nextSection: <Projects />,
            aboutColor: this.inactiveColor,
            projectColor: this.activeColor,
            contactColor: this.inactiveColor,
        })
    }

    openContact(){
        this.setState({
            nextSection: <Contact />,
            aboutColor: this.inactiveColor,
            projectColor: this.inactiveColor,
            contactColor: this.activeColor,
        })
    }

    render() { 
        return (
            <div>
                <div id="nav-menu" className="">
                    <div>
                        <li onClick={this.props.home}>
                           Home
                        </li>
                        <li onClick={this.openAbout} style={{color: this.state.aboutColor}}>
                            About
                        </li>

                        <li onClick={this.openProjects} style={{color: this.state.projectColor}}>
                           Projects
                        </li>

                        <li onClick={this.openContact} style={{color: this.state.contactColor}}>
                            Contact
                        </li>
                    </div>
                </div>

                <div id="content">
                    {this.state.nextSection}
                    <Footer />
                </div>
            </div>
        );
    }
}
 
export default Main;