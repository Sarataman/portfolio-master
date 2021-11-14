import React, {Component} from 'react'

class ContactMe extends Component {
    render () {
        return (
            <div>
                <section data-section="contactme" className="colorlib-work animate-box colorlib-narrow-content contact-bg" data-animate-effect="fadeInLeft">
                    <div className="text-center px-3">
                        <div>
                            <p className="pt-3">Feel free to contact me</p>
                            <h1 style={{fontSize: '60px'}}>Get in Touch</h1>
                        </div>
                        <div class="container-fluid py-5" id="contact">
                            <div className="pr-5">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <div class="contact-form text-center">
                                            <div id="success"></div>
                                            <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                                <div class="form-row">
                                                    <div class="control-group col-sm-6">
                                                        <input type="text" class="form-control p-4" id="name" placeholder="Your Name"
                                                            required="required" data-validation-required-message="Please enter your name" />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                    <div class="control-group col-sm-6">
                                                        <input type="email" class="form-control p-4" id="email" placeholder="Your Email"
                                                            required="required" data-validation-required-message="Please enter your email" />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <input type="text" class="form-control p-4" id="subject" placeholder="Subject"
                                                        required="required" data-validation-required-message="Please enter a subject" />
                                                    <p class="help-block text-danger"></p>
                                                </div>
                                                <div class="control-group">
                                                    <textarea class="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                                        required="required"
                                                        data-validation-required-message="Please enter your message"></textarea>
                                                    <p class="help-block text-danger"></p>
                                                </div>
                                                <div>
                                                    <button type="submit" class="btn btn-danger mt-5" id="sendMessageButton">Send Message</button>
                                                </div>
                                            </form>
                                            <br />
                                            <br />
                                            <div style={{color: 'gray'}}>
                                                <i>You can also reach me on </i>
                                                <p>+2348163123060, +2347017047720
                                                    <br />
                                                sarahehi.sa@gmail.com </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ContactMe