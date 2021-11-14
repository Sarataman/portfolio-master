import React, {Component} from 'react'

class Skills extends Component {
render() {
    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta" style={{fontSize: '50px'}}>My Skills</span>
                        <h2 className="colorlib-heading">Here are some of my expertise</h2>
                    </div>
                </div>
                <div className="row row-pt-md">
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-1">
                            <span className="icon">
                                <i class="fab fa-html5"></i>
                            </span>
                            <div className="desc">
                                <h3>HTML5 </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-3">
                            <span className="icon">
                                <i class="fab fa-css3-alt"></i>
                            </span>
                            <div className="desc">
                                <h3>CSS3</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-5">
                            <span className="icon">
                                <i class="fab fa-js-square"></i>
                            </span>
                            <div className="desc">
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-6">
                            <span className="icon">
                                <i class="fab fa-react"></i>
                            </span>
                            <div className="desc">
                                <h3>React JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-2">
                            <span className="icon">
                                <i class="fab fa-angular"></i>
                            </span>
                            <div className="desc">
                                <h3>Angular </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-6">
                            <span className="icon">
                                <i class="fab fa-bootstrap"></i>
                            </span>
                            <div className="desc">
                                <h3>Bootstrap</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-4">
                            <span className="icon">
                                <img width="40px" src="images/photoshop.jpg" alt=""/>
                            </span>
                            <div className="desc">
                                <h3>Photoshop</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-1">
                            <span className="icon">
                                <i class="fab fa-github-square"></i>
                            </span>
                            <div className="desc">
                                <h3>Git</h3>
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

export default Skills