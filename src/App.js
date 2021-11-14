import React from 'react'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import './App.css'
import ContactMe from './components/ContactMe'

const App = () => {
    return (
        <div className="colorlib-page">
            <div id="container-wrap">
                <Sidebar></Sidebar>
				<div id="colorlib-main">
                    <Header />
                    <Skills />
                    <Projects />
                    <ContactMe />
                </div>
            </div>
        </div>
    )
}

export default App