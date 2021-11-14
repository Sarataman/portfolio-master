import React, {Component} from 'react'

export default class Projects extends Component {
    render() {
      return (
        <div>
            <section className="colorlib-work" data-section="projects">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta" style={{fontSize:'50px'}}>My Work</span>
                            <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                            <div className="project" style={{backgroundImage: 'url(images/online-react-lib.JPG)', borderRadius: '4%'}}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="https://onine-lib.netlify.app/">Online React Library using Google API</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                            <div className="project" style={{backgroundImage: 'url(images/quiz-now.JPG)', borderRadius: '4%'}}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="https://quiz-now-app.netlify.app/">Quiz Now App</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                            <div className="project" style={{backgroundImage: 'url(images/portfolio.JPG)', borderRadius: '4%'}}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="work.html">Portfolio</a></h3>
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
  
