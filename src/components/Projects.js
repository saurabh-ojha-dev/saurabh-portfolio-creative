import React from 'react'
import "../assets/css/projects.css";
import MediaSliderCarousel from './MediaSliderCarousel';


const Projects = () => {
    return (
        <>
            <div className='main-project-section'>
                <div className='container'>
                    <div className='row-achievemnts'>
                        <div className='column'>
                            <article className="card">
                                <img src={require("../assets/images/ts.webp")} width={"250px"} height={"250px"} alt="" className="card-img" />
                                <div className="card-data">
                                    <h2 className="card-title">Thread Solutions</h2>
                                    <p className="card-description">
                                        A dynamic PHP website, offers seamless thread management. Enhancing collaboration and organization, it simplifies discussions with its user-friendly interface.
                                    </p>
                                    <a href="http://threadsolutions.infinityfreeapp.com/" target="_blank"  rel="noreferrer" className="card-btn">Check it Out</a>
                                </div>
                            </article>
                        </div>

                        <div className='column'>
                            <article className="card">
                                <img src={require("../assets/images/webnews1.png")} alt="" className="card-img" />
                                <div className="card-data">
                                    <h2 className="card-title">WebNews</h2>
                                    <p className="card-description"> A dynamic React application delivering real-time news updates and stay informed and engaged with personalized content in a seamless browsing experience.</p>
                                    <a href="https://github.com/Saurabh-ojha-2000/WebNews" target='_blank'  rel="noreferrer" className="card-btn">Check it Out</a>
                                </div>
                            </article>
                        </div>

                        <div className='column'>
                            <article className="card">
                                <img src={require("../assets/images/Workrise.png")} alt="" className="card-img" />
                                <div className="card-data">
                                    <h2 className="card-title">WorkRise</h2>
                                    <p className="card-description">
                                        Workrise is an innovative platform that connects freelancers with clients seeking a wide range of services, from design to consulting in the gig economy.
                                    </p>
                                    <a href="https://work-rise.vercel.app/" target='_blank'  rel="noreferrer" className="card-btn">Check it Out</a>
                                </div>
                            </article>
                        </div>
                        </div>

                        {/* <div className='row-achievemnts-second'> */}
                        <div className='row-achievemnts'>

                        <div className='column'>
                            <article className="card">
                                <img src={require("../assets/images/crm panel.png")} alt="" className="card-img" />
                                <div className="card-data">
                                    <h2 className="card-title">CRM Panel</h2>
                                    <p className="card-description">
                                        The Comprehensive Customer CRM Panel is an advanced system for managing customer interactions, orders, and feedback to enhance efficiency and customer satisfaction.</p>
                                    <a href="https://github.com/Saurabh-ojha-2000/crm-panel-frontend" target="_blank"  rel="noreferrer" className="card-btn">Check it Out</a>
                                </div>
                            </article>
                        </div>
                        <div className='column'>
                            <article className="card">
                                <img src={require("../assets/images/graph.png")} alt="" className="card-img" />
                                <div className="card-data">
                                    <h2 className="card-title">Visualization Dashboard</h2>
                                    <p className="card-description">
                                    The Visualization Dashboard is a user management tool that displays key user information,it allows for quick filtering by name, email,etc.</p>
                                    <a href="https://visualization-user-dashboard.vercel.app/" target='_blank'  rel="noreferrer" className="card-btn">Check it Out</a>
                                </div>
                            </article>
                        </div>
                        <div className='column'>
                            <article className="card">
                                <img src={require("../assets/images/logo1.png")} alt="" className="card-img" />
                                <div className="card-data">
                                    <h2 className="card-title">Ostium Doors & Windows</h2>
                                    <p className="card-description">
                                    Ostium Doors & Windows Website: A Next.js-Powered Platform Showcasing Premium Steel Doors & Windows  Solutions"</p>
                                    <a href="https://ostium-frontend.vercel.app/" target='_blank'  rel="noreferrer" className="card-btn">Check it Out</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
          

            <MediaSliderCarousel />
        </>

    )
}

export default Projects;
