import React, { Component } from 'react';

class About extends Component {

    skills = {
        algo: 92,
        ds: 86,
        web: 80,
        cli: 60,
        android: 50,
        desktop: 30,
    }

    render() { 
        return (
            <center>
            <div className="content-holder">
                <div style={{textAlign: "left", letterSpacing: "4px", fontVariant: "small-caps", fontSize: 30, fontWeight: "normal"}}>
                    <span style={{display: "inline-block", borderBottom: "solid 1px #ff0077", padding: "2px 7px 12px 7px"}}>Abhishek Kumar</span>
                </div>

                <p style={{textAlign: "left", margin: "10px 0px 10px 0px", padding: "5px 12px 5px 12px", color: "rgba(210, 210, 210, 1)", letterSpacing: "1.7px"}}>
                    I spent my teenage in Mathura. Being a sports enthusiast I joined my school field hockey team and participated in National School Games in different age groups. You can find me watching movies in my free time. Presently I am IT undergrad @ NIT Allahabad. I am carrying an experience in Software Development and Competitive Programming.
                </p>
            </div>

            <div className="content-holder flex-container">
                <div className="profile">

                    <div style={{textAlign: "left", letterSpacing: "2px", fontVariant: "small-caps", fontSize: 20, paddingBottom: "7px"}}>
                        <span style={{display: "inline-block", borderBottom: "solid 1px #ff0077", padding: "2px 7px 4px 7px"}}>Profile</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Date of Birth :</span></label>
                        <span className="detail">28 March 1998</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Profession :</span></label>
                        <span className="detail">Student (B.Tech)</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Handle: </span></label>
                        <span className="detail">abhishekad7</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Resume: </span></label>
                        <span className="detail">
                            <a href="" style={{color: "#aaa", textDecoration: "none"}}>Click to Download</a>
                        </span>
                    </div>
                </div>

                <div className="skills">
                    <div style={{textAlign: "left", letterSpacing: "2px", fontVariant: "small-caps", fontSize: 20, paddingBottom: "7px"}}>
                        <span style={{display: "inline-block", borderBottom: "solid 1px #ff0077", padding: "2px 7px 4px 7px"}}>Skills</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Algorithms </span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.skills.algo+"%"}}>
                                {this.skills.algo}%
                            </div>
                        </div>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Data Structures </span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.skills.ds+"%"}}>
                                {this.skills.ds}%
                            </div>
                        </div>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Web Development </span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.skills.web+"%"}}>
                                {this.skills.web}%
                            </div>
                        </div>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Command Line App</span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.skills.cli+"%"}}>
                                {this.skills.cli}%
                            </div>
                        </div>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Android App Development </span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.skills.android+"%"}}>
                                {this.skills.android}%
                            </div>
                        </div>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Desktop App Development </span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.skills.desktop+"%"}}>
                                {this.skills.desktop}%
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="content-holder">

            </div>
            </center>
        );
    }
}
 
export default About;