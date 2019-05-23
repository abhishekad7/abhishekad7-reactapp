import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebookF, faLinkedin, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';
import './home.css';


class Home extends Component {

    render() { 
        return (
            <div style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                backgroundImage: "url('/img/bg.gif')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                paddingTop: "40px",
                textAlign: "center",
                color: "rgba(220, 220, 220, 1)",
            }}>
                <div style={{marginTop: "40px"}}>
                    <p style={{fontSize: "40px"}}>𝕀'𝕞 <span style={{color: "#FF0077"}}>𝔸𝕓𝕙𝕚𝕤𝕙𝕖𝕜 𝕂𝕦𝕞𝕒𝕣</span></p>
                    <p style={{fontSize: 18, fontVariant: "small-caps", letterSpacing: 3}}>| Programmer | Algorithmist | Web-Developer |</p>
                </div>

                <div style={{width: "100%", padding: "70px 0px 70px 0px", marginTop: "20px"}}>
                    <button id="explore-btn" onClick={this.props.main}>Explore about me</button>
                </div>

                <div style={{position: "absolute", width: "100%", bottom: "40px"}}>
                    <p style={{fontSize: 41, letterSpacing: 6}}>
                        <span className="social-icon"><a href="https://github.com/abhishekad7/" className="text-light" ><FontAwesomeIcon icon={faGithub}/></a></span> 
                        <span className="social-icon"><a href="https://www.facebook.com/gallic.ricardo/" className="text-light" > <FontAwesomeIcon icon={faFacebookF}/></a></span> 
                        <span className="social-icon"><a href="https://www.linkedin.com/in/abhishekad7/" className="text-light" > <FontAwesomeIcon icon={faLinkedin}/></a></span> 
                        <span className="social-icon"><a href="https://www.twitter.com/imabhishekad7/" className="text-light" > <FontAwesomeIcon icon={faTwitter}/></a></span> 
                        <span className="social-icon"><a href="https://medium.com/abhishekad7/" className="text-light" > <FontAwesomeIcon icon={faMedium}/></a></span>
                    </p>
                </div>

            </div>
        );
    }
}

export default Home;