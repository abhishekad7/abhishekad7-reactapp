import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebookF, faLinkedin, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    
    
    render() { 
        return (
            <center>
                <div className="content-holder">
                    <p>
                        <div style={{display: "inline-block", fontSize: 14, letterSpacing: 1.1}}>
                            © 2019 abhishekad7
                        </div>
                        
                        <div style={{display: "inline-block", fontSize: 22, letterSpacing: 2}}>
                            <span className="social-icon"><a href="https://github.com/abhishekad7/"><FontAwesomeIcon icon={faGithub}/></a></span> 
                            <span className="social-icon"><a href="https://www.facebook.com/imabhishekad7/" > <FontAwesomeIcon icon={faFacebookF}/></a></span> 
                            <span className="social-icon"><a href="https://www.linkedin.com/in/abhishekad7/" > <FontAwesomeIcon icon={faLinkedin}/></a></span> 
                            <span className="social-icon"><a href="https://www.twitter.com/imabhishekad7/" > <FontAwesomeIcon icon={faTwitter}/></a></span> 
                            <span className="social-icon"><a href="https://medium.com/abhishekad7/" > <FontAwesomeIcon icon={faMedium}/></a></span>
                        </div>
                    </p>
                </div>
            </center>
        );
    }
}
 
export default Footer;