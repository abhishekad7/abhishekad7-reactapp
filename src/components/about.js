import React, { Component } from 'react';

class About extends Component {

    render() { 
        return (
            <center>
            <div className="content-holder">
                <div style={{textAlign: "left", letterSpacing: "4px", fontVariant: "small-caps", fontSize: 30, fontWeight: "normal"}}>
                    <span style={{display: "inline-block", borderBottom: "solid 1px #ff0077", padding: "2px 7px 12px 7px"}}>Abhishek Kumar</span>
                </div>

                <p style={{textAlign: "left", margin: "10px 0px 10px 0px", padding: "5px 12px 5px 12px", color: "rgba(200, 200, 200, 1)"}}>
                    Coming Soon
                </p>
            </div>
            </center>
        );
    }
}
 
export default About;