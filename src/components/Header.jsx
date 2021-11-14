import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
            <div className="flexslider js-fullheight">
                <ul className="slides">
                <li style={{background: 'white'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                            <div className="desc">
                              <h1 className="header-font">Hi! <br />I'm Ehimenmen Ataman</h1>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li style={{background: 'white'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner">
                            <div className="desc">
                              <h1 className="header-font">I am <br />a Front End Web Developer</h1>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
        </section>
      </div>
    )
  }
}