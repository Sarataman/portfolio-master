import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <br/>
              <h1 id="colorlib-logo" className="header-font"><a href="index.html">Ehimenmen Ataman</a></h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="./Header" data-nav-section="home">Home</a></li>
                  <li><a href="./Skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="./Projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="./ContactMe" data-nav-section="contactme">Contact Me</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://drive.google.com/file/d/1e0tjTmxpNNriL0VprU0ninsWVj_rgcXC/view?usp=sharing">Resume</a></li>
                <li><a href="https://www.linkedin.com/in/ehimenmen-ataman-1290b7109/" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/sarataman"  rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
