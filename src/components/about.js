import React, { Component } from 'react';

class About extends Component {

    finalSkills = {
        algo: 92,
        ds: 86,
        web: 80,
        cli: 60,
        android: 50,
        desktop: 30,
    };

    delSkills = {
        algo: 0,
        ds: 0,
        web: 0,
        cli: 0,
        android: 0,
        desktop: 0,
    }

    cvLink = "/assets/resume.pdf";
    skillsPart = 256;
    hundred = 0;
    delHundred = 0;
    interval = null;

    constructor(props){
        super(props);
        document.title = "About | abhishekad7";
        this.state = {
            skills: {
                algo: 0,
                ds: 0,
                web: 0,
                cli: 0,
                android: 0,
                desktop: 0,
            }
        }
        this.calcDelSkills = this.calcDelSkills.bind(this);
        this.fillSkills = this.fillSkills.bind(this);
        this.nextVal = this.nextVal.bind(this);
    }

    calcDelSkills(){
        this.delSkills = {
            algo: this.finalSkills.algo/this.skillsPart,
            ds: this.finalSkills.ds/this.skillsPart,
            web: this.finalSkills.web/this.skillsPart,
            cli: this.finalSkills.cli/this.skillsPart,
            android: this.finalSkills.android/this.skillsPart,
            desktop: this.finalSkills.desktop/this.skillsPart,
        }
        this.delHundred = 100/this.skillsPart;
    }

    componentDidMount(){
        this.calcDelSkills();
        this.interval = setInterval(this.fillSkills, 10)
    }

    nextVal(num){
        const p = 100
        num = Math.floor(num * p);
        return num/p;
    }

    fillSkills(){

        if(this.hundred > 100){
            clearInterval(this.interval);
            this.setState({skills: this.finalSkills});
            return;
        }

        this.currSkill = {
            algo: this.nextVal(this.state.skills.algo + this.delSkills.algo),
            ds: this.nextVal(this.state.skills.ds + this.delSkills.ds),
            web: this.nextVal(this.state.skills.web + this.delSkills.web),
            cli: this.nextVal(this.state.skills.cli + this.delSkills.cli),
            android: this.nextVal(this.state.skills.android + this.delSkills.android),
            desktop: this.nextVal(this.state.skills.desktop + this.delSkills.desktop),
        }
        this.hundred += this.delHundred;

        this.setState({skills: this.currSkill});
    }


    render() { 
        return (
            <center>
            <div className="content-holder">
                <div style={{letterSpacing: "4px", fontSize: 30}} className="heading">
                    <span>Abhishek Kumar</span>
                </div>

                <p style={{textAlign: "left", margin: "10px 0px 10px 0px", padding: "5px 12px 5px 12px", color: "rgba(210, 210, 210, 1)", letterSpacing: "1.7px"}}>
                    I spent my teenage in Mathura. Being a sports enthusiast I joined my school field hockey team and participated in National School Games in different age groups. You can find me watching movies in my free time. Presently I am IT undergrad @ NIT Allahabad. I am carrying an experience in Software Development and Competitive Programming.
                </p>
            </div>

            <div className="content-holder flex-container">
                <div className="profile">

                    <div className="heading">
                        <span>Profile</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Date of Birth</span></label>
                        <span className="detail">28 March 1998</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Profession</span></label>
                        <span className="detail">Student (B.Tech)</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Email</span></label>
                        <span className="detail">abhishekad7@gmail.com</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>My Website</span></label>
                        <span className="detail">abhishekad7.github.io</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Handle</span></label>
                        <span className="detail">abhishekad7</span>
                    </div>

                    <div className="detail-box" style={{marginTop: "30px", fontWeight: "bold"}}>
                        <a href={this.cvLink} style={{display: "", textDecoration: "none", border: "solid 2px #ccc", padding: "10px 40px 10px 40px", color: "#fff"}}>Resume</a>
                    </div>
                </div>

                <div className="skills">
                    <div className="heading">
                        <span>Skills</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Algorithms </span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.state.skills.algo+"%"}}>
                                {this.state.skills.algo}%
                            </div>
                        </div>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Data Structures </span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.state.skills.ds+"%"}}>
                                {this.state.skills.ds}%
                            </div>
                        </div>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Web Development </span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.state.skills.web+"%"}}>
                                {this.state.skills.web}%
                            </div>
                        </div>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Command Line App</span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.state.skills.cli+"%"}}>
                                {this.state.skills.cli}%
                            </div>
                        </div>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Android App Development </span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.state.skills.android+"%"}}>
                                {this.state.skills.android}%
                            </div>
                        </div>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Desktop App Development </span></label>
                        <div className="skill-box">
                            <div className="skill-level" style={{width: this.state.skills.desktop+"%"}}>
                                {this.state.skills.desktop}%
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