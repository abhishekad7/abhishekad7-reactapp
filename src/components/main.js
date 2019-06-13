import React, { Component } from 'react';
import './main.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';
import {Route, Link} from 'react-router-dom';


class Main extends Component {

    activeColor = "#ff0077";
    inactiveColor = "#fff";

    constructor(props){
        super(props);
        this.openAbout = this.openAbout.bind(this);
        this.openProjects = this.openProjects.bind(this);
        this.openContact = this.openContact.bind(this);
    }




    setLinkColor(linkid){
        /*document.getElementById('link_1').style.color=this.innactiveColor;
        document.getElementById('link_2').style.color=this.inactiveColor;
        document.getElementById('link_3').style.color=this.inactiveColor;
        document.getElementById('link_'+linkid).style.color=this.activeColor;
        */
    }

    openAbout(){
        this.setLinkColor(1);
    }

    openProjects(){
        this.setLinkColor(2);
    }

    openContact(){
        this.setLinkColor(3);
    }


    render() { 
        return (
            <div>

                <div id="nav-menu" className="">
                    
                    
                    <div>
                        
                        <Link className="link" to="/">
                            Home
                        </Link>

                        <Link className="link" to="/ex/about" onClick={this.openAbout}>
                            <span id="link_1">About</span>
                        </Link>

                        <Link className="link" to="/ex/projects" onClick={this.openProjects}>
                            <span id="link_2">Projects</span>
                        </Link>

                        <Link className="link" to="/ex/contact" onClick={this.openContact}>
                            <span id="link_3">Contact</span>
                        </Link>
                    </div>
                </div>

                <div id="content">
                    <Route exact path="/ex/about" component={About} />
                    <Route exact path="/ex/projects" component={Projects} />
                    <Route exact path="/ex/contact" component={Contact} />
                    
                    <Footer />
                </div>
            </div>
        );
    }
}
 
export default Main;