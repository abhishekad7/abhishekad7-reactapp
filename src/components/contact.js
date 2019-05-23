import React, { Component } from 'react';

class Contact extends Component {
    render() { 
        return (
            <center>
                
                <div className="content-holder">

                    <div className="detail-box">
                        <label className=""><span>Phone</span></label>
                        <span className="detail">+919557660260</span>
                    </div>

                    <div className="detail-box">
                        <label className=""><span>Email</span></label>
                        <span className="detail">abhishekad7@gmial.com</span>
                    </div>
                </div>

                <div className="content-holder">

                    <div className="heading">
                        <span style={{fontVariant: "normal", fontSize: 20, border: "0px"}}>Always happy to hear from you.</span>
                    </div>

                    <form method="POST" action="https://formspree.io/abhishekad7@gmail.com">
                        <div className="form-element">
                            <input type="text" name="Name" placeholder="Your Name" />
                        </div>

                        <div className="form-element">
                            <input type="email" name="Email" placeholder="Your Email" />
                        </div>

                        <div className="form-element">
                            <input type="text" name="Subject" placeholder="Subject" />
                        </div>

                        <div className="form-element">
                            <textarea name="Message" placeholder="Message" />
                        </div>

                        <div className="form-element">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>


            </center>

        );
    }
}
 
export default Contact;