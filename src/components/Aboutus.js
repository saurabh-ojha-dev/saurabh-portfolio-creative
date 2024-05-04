import React from 'react'
import avatarImage from '../assets/images/mf-avatar.svg';
import herodevices from '../assets/images/hero-devices.svg';
import "../assets/css/aboutus.css";

const Aboutus = () => {
    return (
        <>
            <div className='aboutus-main'>
                <section className="hero is-white has-text-centered">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column">
                                    <h1 className="title-developer is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Frontend &amp; Backend Developer</h1>
                                    <h2 className="subtitle is-size-4-tablet">I design and code beautifully simple things, and I love what I do.</h2>
                                    <img className="avatar" src={avatarImage} alt="Avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-foot">
                        <div className="container"><img className="is-bottom" src={herodevices} alt="hero-devices loading" /></div>
                    </div>
                </section>
                <section className="section is-medium is-primary has-text-centered is-long">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-three-fifths">
                                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Hi, I’m Saurabh. Nice to meet you.</h1>
                                <h2 className="subtitle is-size-5-desktop has-text-weight-normal">Since beginning my journey as a Full Stack Developer 2 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section skills has-text-centered">
                    <div className="container is-narrow">
                        <div className="box">
                            <div className="content">
                                <div className="columns is-centered">
                                    <div className="column"><span className="fa-stack fa-2x"><img className='is-bottom' src={require("../assets/images/frontend.png")} alt="" oops /> </span>
                                        <h1 className="title is-size-4 is-spaced">Frontend Developer</h1>
                                        <p>I like to code things from scratch with extensive experience in building single-page applications (SPAs), and enjoy bringing ideas to life in the browser.</p>
                                        <p className="list-title">Languages I speak:</p>
                                        <p>HTML, CSS, Git</p>
                                        <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                                        <ul>
                                            <li>ReactJS</li>
                                            <li>NextJS</li>
                                            <li>Html</li>
                                            <li>Css</li>
                                            <li>Bootstrap</li>
                                            <li>Redux Toolkit</li>
                                            <li>Fontawsome</li>
                                            <li>Git & Github</li>
                                            <li>Netlify | Render | Hostinger </li>
                                        </ul>
                                    </div>
                                    <div className="column"><span className="fa-stack fa-2x"><img className='is-bottom' src={require("../assets/images/database.png")} alt="" oops /></span>
                                        <h1 className="title is-size-4 is-spaced">Database Developer</h1>
                                        <p>Write and optimize SQL queries to ensure efficient data retrieval and
                                            analyze and improve database performance through indexing and other optimization techniques</p>
                                        <p className="list-title">Things I Using:</p>
                                        <p>Mongodb Compass, PhpMyAdmin, SQL</p>
                                        <p className="list-title has-text-primary has-text-weight-normal">Databases:</p>
                                        <ul>
                                            <li>MongodDB</li>
                                            <li>Mysql</li>
                                            <li>PostGresql</li>
                                        </ul>
                                    </div>
                                    <div className="column"><span className="fa-stack fa-2x"><img className='is-bottom' src={require("../assets/images/backend.png")} alt="" oops /> </span>
                                        <h1 className="title is-size-4 is-spaced">Backend Developer</h1>
                                        <p>Develop server-side logic using backend tecnologies Implement RESTful APIs for communication between the frontend and backend components.</p>
                                        <p className="list-title">Languages I speak:    </p>
                                        <p>Javascript</p>
                                        <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                                        <ul>
                                            <li>NodeJS</li>
                                            <li>ExpressJS</li>
                                            <li>Php</li>
                                            <li>API Integration</li>
                                            <li>C++</li>
                                            <li>Data Structure and Algorithm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
            </div>
        </>
    )
}

export default Aboutus;