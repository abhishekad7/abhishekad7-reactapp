import React, { Component } from 'react';
import "./project.css"


class Projects extends Component {
    
    projects = [
        {
            title: "Future Trivia",
            tools: ["Django", "Javascript"],
            desc: "A Django based web app for onine quizzing and exams.",
            sss: ["/img/ft1.jpg"],
            navs:[
                {"href": "https://github.com/abhishekad7/futureTrivia", "name": "See on Github"},
                {"href": "https://futuretrivia.pythonanywhere.com/", "name": "Live"}
            ]

        },

        {
            title: "Kody Alarm: Coding Calendar",
            tools: ["Java", "Android Studio"],
            desc: "An android app which shows you all upcoming programming contests on AtCoder, Codeforces and Codechef. User can set reminder for upcoming contest.",
            sss: ["/img/kody1.jpg"],
            navs:[
                {"href": "https://github.com/abhishekad7/coding_calendar", "name": "See on Github"},
                {"href": "https://drive.google.com/open?id=1uPofiI-gQ2RiafWQLO3Q8CyZQRGk1lXe", "name": "Download App"}
            ]

        },

        {
            title: "This Webapp",
            tools: ["ReactJS", "Javascript", "CSS"],
            desc: "A ReactJS based web app. This web app is an image of me.",
            sss: [],
            navs:[
                {"href": "https://github.com/abhishekad7/abhishekad7-reactapp", "name": "See on Github"},
                {"href": "https://abhishekad7.github.io", "name": "Live"}
            ]

        },

        {
            title: "Live Cricker",
            tools: ["Python"],
            desc: "A Command Line app for getting live cricket matches updates. It shows notification at regular intervals.",
            sss: [],
            navs:[
                {"href": "https://github.com/abhishekad7/live-cric", "name": "See on Github"},
            ]

        }
    ]

    constructor(props){
        super(props);
        document.title = "Projects | abhishead7";
        this.addProject = this.addProject.bind(this);
    }

    addProject(obj, idx){

        let project = <div className="project" key={idx}>
            <div className="project-heading">
                <span>{obj.title}</span>
            </div>
            <div className="project-tools">
                {obj.tools.map((tool, idx) => {
                    return (<span key={idx}>{tool}</span>)
                })}
            </div>
            <div className="project-desc">
                {obj.desc}
            </div>
            <div className="project-sss">
                {obj.sss.map((src, idx) => {
                    return (<img alt={obj.title} src={src} key={idx}/>)
                })}
            </div>
            <div className="project-nav">
                {obj.navs.map((nav, idx) => {
                    return (<a target="_blank" rel="noopener noreferrer" href={nav.href}>{nav.name}</a>)
                })}
            </div>
        </div>
        //console.log(project);
        return project;
    }


    render() { 
        return (
            <center>
                <div className="content-holder">

                    <div style={{letterSpacing: "4px", fontSize: 30}} className="heading">
                        <span>Projects</span>
                    </div>
                    
                    {this.projects.map((project, idx) => {
                        return this.addProject(project, idx);
                    })}

                </div>

                
            </center>
        );
    }
}
 
export default Projects;