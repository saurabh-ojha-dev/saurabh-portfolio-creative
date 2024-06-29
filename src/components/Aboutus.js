// import React from 'react'
// import avatarImage from '../assets/images/mf-avatar.svg';
// import herodevices from '../assets/images/hero-devices.svg';
// import herodevices2 from '../assets/images/hero-devices-mobile.ico';
// import "../assets/css/aboutus.css";

// const Aboutus = () => {
//     return (
//         <>
//             <div className='aboutus-main'>
//                 <section className="hero is-white has-text-centered">
//                     <div className="hero-body">
//                         <div className="container">
//                             <div className="columns is-centered">
//                                 <div className="column">
//                                     <h1 className="title-developer is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Frontend &amp; Backend Developer</h1>
//                                     <h2 className="subtitle is-size-4-tablet">I design and code beautifully simple things, and I love what I do.</h2>
//                                     <img className="avatar" src={avatarImage} alt="Avatar" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="hero-foot">
//                         <div className="container">
//                             <img className="is-bottom" src={herodevices} alt="hero-devices loading" />
//                             <img className="is-mobile" src={herodevices2} alt="hero-devices loading" />
//                         </div>
//                     </div>
//                 </section>
//                 <section className="section is-medium is-primary has-text-centered is-long">
//                     <div className="container intro">
//                         <div className="columns is-centered">
//                             <div className="column is-three-fifths">
//                                 <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Hi, I’m Saurabh. Nice to meet you.</h1>
//                                 <h2 className="subtitle is-size-5-desktop has-text-weight-normal">Since i began my journey as a Full Stack Web Developer 2 years   ago, I have honed my skills as a Full Stack Web Developer, working on a diverse
//                                     range of projects that have equipped me with the experience and knowledge needed to excel in this
//                                     role. My experience spans front-end and back-end development, responsive design, and user
//                                     experience optimization. I have a deep understanding of web technologies, including HTML5, CSS3,
//                                     JavaScript, ReactJs, NodeJS, Express.js, Mondodb , Mysql, Php, PhpMyadmin and various web
//                                     frameworks , APIs and libraries and have collaborated with talented people to create digital products for both business and consumer use. I'm quiet confident, naturally curious, and perpetually working on improving my chops.
//                                     <br /><br />I have a proven track record of collaborating effectively in cross-functional teams to deliver high quality web applications. I take pride in my ability to translate complex business requirements into
//                                     efficient and user-friendly web solutions. My attention to detail, problem-solving skills, and
//                                     commitment to staying current with industry trends make me a valuable asset to any development
//                                     team.</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="section skills has-text-centered">
//                     <div className="container is-narrow">
//                         <div className="box">
//                             <div className="content">
//                                 <div className="columns is-centered">
//                                     <div className="column"><div><img className='is-bottom' src={require("../assets/images/frontend.png")} alt="" oops /> </div>
//                                         <h1 className="title is-size-4 is-spaced">Frontend Developer</h1>
//                                         <p>I like to code things from scratch with extensive experience in building single-page applications (SPAs), and enjoy bringing ideas to life in the browser.</p>
//                                         <p className="list-title">Languages I speak:</p>
//                                         <p>HTML, CSS, Git</p>
//                                         <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
//                                         <ul>
//                                             <li>ReactJS</li>
//                                             <li>NextJS</li>
//                                             <li>Html</li>
//                                             <li>Css</li>
//                                             <li>Bootstrap</li>
//                                             <li>Redux Toolkit</li>
//                                             <li>Fontawsome</li>
//                                             <li>Git & Github</li>
//                                             <li>Netlify | Render | Hostinger </li>
//                                         </ul>
//                                     </div>
//                                     <div className="column"><div><img className='is-bottom' src={require("../assets/images/database.png")} alt="" oops /></div>
//                                         <h1 className="title is-size-4 is-spaced">Database Developer</h1>
//                                         <p>Write and optimize SQL queries to ensure efficient data retrieval and
//                                             analyze and improve database performance through indexing and other optimization techniques</p>
//                                         <p className="list-title">Things I Using:</p>
//                                         <p>Mongodb Compass, PhpMyAdmin, SQL</p>
//                                         <p className="list-title has-text-primary has-text-weight-normal">Databases:</p>
//                                         <ul>
//                                             <li>MongodDB</li>
//                                             <li>Mysql</li>
//                                             <li>PostGresql</li>
//                                         </ul>
//                                     </div>
//                                     <div className="column"><div><img className='is-bottom' src={require("../assets/images/backend.png")} alt="" oops /> </div>
//                                         <h1 className="title is-size-4 is-spaced">Backend Developer</h1>
//                                         <p>Develop server-side logic using backend tecnologies Implement RESTful APIs for communication between the frontend and backend components.</p>
//                                         <p className="list-title">Languages I speak:    </p>
//                                         <p>Javascript</p>
//                                         <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
//                                         <ul>
//                                             <li>NodeJS</li>
//                                             <li>ExpressJS</li>
//                                             <li>Php</li>
//                                             <li>API Integration</li>
//                                             <li>C++</li>
//                                             <li>Data Structure and Algorithm</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <br />
//                 <br />
//             </div>
//         </>
//     )
// }

// export default Aboutus;

import React from 'react';
import avatarImage from '../assets/images/mf-avatar.svg';
import herodevices from '../assets/images/hero-devices.svg';
import herodevices2 from '../assets/images/hero-devices-mobile.ico';
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
                        <div className="container" style={{display:"grid" , justifyContent:"center"}}>
                            <img className="is-bottom desktop" src={herodevices} alt="hero-devices loading" />
                            <img className="is-bottom mobile" src={herodevices2} alt="hero-devices loading" />
                        </div>
                    </div>
                </section>
                <section className="section introduction-summary is-medium is-primary has-text-centered is-long">
                    <div className="container intro">
                        <div className="columns is-centered">
                            <div className="column is-three-fifths">
                                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Hi, I’m Saurabh. Nice to meet you.</h1>
                                <p className="subtitle is-size-5-desktop has-text-weight-normal">
                                    Since I began my journey as a Full Stack Web Developer 2 years ago, I have honed my skills as a Full Stack Web Developer, working on a diverse range of projects that have equipped me with the experience and knowledge needed to excel in this role. My experience spans front-end and back-end development, responsive design, and user experience optimization. I have a deep understanding of web technologies, including HTML5, CSS3, JavaScript, ReactJs, NodeJS, Express.js, MongoDB, MySQL, PHP, PhpMyAdmin and various web frameworks, APIs, and libraries. I have collaborated with talented people to create digital products for both business and consumer use. I'm quiet confident, naturally curious, and perpetually working on improving my chops.
                                    <br /><br />
                                    I have a proven track record of collaborating effectively in cross-functional teams to deliver high-quality web applications. I take pride in my ability to translate complex business requirements into efficient and user-friendly web solutions. My attention to detail, problem-solving skills, and commitment to staying current with industry trends make me a valuable asset to any development team.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section skills has-text-centered">
                    <div className="container is-narrow">
                        <div className="box">
                            <div className="content">
                                <div className="columns is-centered">
                                    <div className="column">
                                        <div><img className='is-bottom main-field' src={require("../assets/images/frontend.png")} alt="Frontend" /></div>
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
                                    <div className="column">
                                        <div><img className='is-bottom main-field' src={require("../assets/images/database.png")} alt="Database" /></div>
                                        <h1 className="title is-size-4 is-spaced">Database Developer</h1>
                                        <p>Write and optimize SQL queries to ensure efficient data retrieval and analyze and improve database performance through indexing and other optimization techniques</p>
                                        <p className="list-title">Things I Using:</p>
                                        <p>MongoDB Compass, PhpMyAdmin, SQL</p>
                                        <p className="list-title has-text-primary has-text-weight-normal">Databases:</p>
                                        <ul>
                                            <li>MongoDB</li>
                                            <li>MySQL</li>
                                            <li>PostgreSQL</li>
                                        </ul>
                                    </div>
                                    <div className="column">
                                        <div><img className='is-bottom main-field' src={require("../assets/images/backend.png")} alt="Backend" /></div>
                                        <h1 className="title is-size-4 is-spaced">Backend Developer</h1>
                                        <p>Develop server-side logic using backend technologies and implement RESTful APIs for communication between the frontend and backend components.</p>
                                        <p className="list-title">Languages I speak:</p>
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
