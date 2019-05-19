import React, { Component } from 'react';
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Main extends Component {

    render() { 
        return (
            <div>
                <div id="nav-menu" className="">
                    <ul>
                        <li onClick={this.props.home}>
                           Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            CV
                        </li>

                        <li>
                           Projects
                        </li>
                        <li>
                            Hobbies
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>

                <div id="content" className="">
                    
                </div>
            </div>
        );
    }
}
 
export default Main;