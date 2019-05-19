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
            }} className="text-light text-center">
                <div className="mt-5">
                    <p style={{fontSize: "40px"}}>𝕀'𝕞 <span style={{color: "#FF0077"}}>𝔸𝕓𝕙𝕚𝕤𝕙𝕖𝕜 𝕂𝕦𝕞𝕒𝕣</span></p>
                    <p style={{fontSize: 18, fontVariant: "small-caps", letterSpacing: 3}}>| Programmer | Algorithmist | Web-Developer |</p>
                </div>

                <div style={{width: "100%", padding: "70px 0px 70px 0px"}} className="mt-3">
                    <button id="explore-btn" className="btn p-3 px-5" onClick={this.props.main}>Explore about me</button>
                </div>

                <div style={{position: "absolute", width: "100%", bottom: "60px"}}>
                    <p style={{fontSize: 31, letterSpacing: 6}} className="mt4">
                        <a href="https://github.com/abhishekad7/" className="text-light"><FontAwesomeIcon icon={faGithub}/></a> 
                        <a href="https://www.facebook.com/gallic.ricardo/" className="text-light"> <FontAwesomeIcon icon={faFacebookF}/></a> 
                        <a href="https://www.linkedin.com/in/abhishekad7/" className="text-light"> <FontAwesomeIcon icon={faLinkedin}/></a> 
                        <a href="https://www.twitter.com/imabhishekad7/" className="text-light"> <FontAwesomeIcon icon={faTwitter}/></a> 
                        <a href="https://medium.com/abhishekad7/" className="text-light"> <FontAwesomeIcon icon={faMedium}/></a>
                    </p>
                </div>

            </div>
        );
    }
}

export default Home;