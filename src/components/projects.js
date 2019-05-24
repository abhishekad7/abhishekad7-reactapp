import React, { Component } from 'react';
import "./project.css"


class Projects extends Component {
    
    render() { 
        return (
            <center>
                <div className="content-holder">


                    <div className="project">
                        <div className="project-heading">
                            <span>Future Trivia</span>
                        </div>
                        <div className="project-tools">
                            <span>Django</span>
                            <span>Javascript</span>
                        </div>
                        <div className="project-desc">
                            A Django based web app for onine quizzing and exams.
                        </div>
                        <div className="project-sss">
                            <img src="/img/ft1.jpg" />
                        </div>
                        <div className="project-nav">
                            <a target="_blank" href="https://github.com/abhishekad7/futureTrivia">See on Github</a>
                            <a target="_blank" href="https://futuretrivia.pythonanywhere.com/">Live</a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-heading">
                            <span>Kody Alarm: Coding Calendar</span>
                        </div>
                        <div className="project-tools">
                            <span>Java</span>
                            <span>Android Studio</span>
                        </div>
                        <div className="project-desc">
                            An android app which shows you all upcoming programming contests on AtCoder, Codeforces and Codechef. User can set reminder for upcoming contest.
                        </div>
                        <div className="project-sss">
                            <img src="/img/kody1.jpg" />
                        </div>
                        <div className="project-nav">
                            <a target="_blank" href="https://github.com/abhishekad7/coding_calendar">See on Github</a>
                            <a target="_blank" href="https://drive.google.com/open?id=1uPofiI-gQ2RiafWQLO3Q8CyZQRGk1lXe">Download App</a>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-heading">
                            <span>This Webapp</span>
                        </div>
                        <div className="project-tools">
                            <span>ReactJS</span>
                            <span>Javascript</span>
                            <span>CSS</span>
                        </div>
                        <div className="project-desc">
                            A ReactJS based web app. This web app is an image of me.
                        </div>
                        
                        <div className="project-nav">
                            <a target="_blank" href="https://github.com/abhishekad7/abhishekad7-reactapp">See on Github</a>
                            <a target="_blank" href="https://abhishekad7.github.io">Live</a>
                        </div>
                    </div>



                    <div className="project">
                        <div className="project-heading">
                            <span>Live Cricker</span>
                        </div>
                        <div className="project-tools">
                            <span>Python</span>
                        </div>
                        <div className="project-desc">
                            A Command Line app for getting live cricket matches updates. It shows notification at regular intervals.
                        </div>
                        
                        <div className="project-nav">
                            <a target="_blank" href="https://github.com/abhishekad7/live_cric">See on Github</a>
                        </div>
                    </div>

                </div>

                
            </center>
        );
    }
}
 
export default Projects;