import React from 'react'
import "../assets/css/projects.css"

const Projects = () => {
    return (
        <div className='main-project-section'>
            <div className='container'>
                <div className='row'>
                    <div className='column'>
                        <article className="card">
                            <img src={require("../assets/images/ts.webp")} width={"250px"} height={"250px"} alt="" className="card-img" />
                            <div className="card-data">
                                <h2 className="card-title">Thread Solutions</h2>
                                <p className="card-description">
                                    A dynamic PHP website, offers seamless thread management. Enhancing collaboration and organization, it simplifies discussions with its user-friendly interface.
                                </p>
                                <a href="http://threadsolutions.infinityfreeapp.com/" target="_blank" className="card-btn">Check it Out</a>
                            </div>
                        </article>
                    </div>
                    <div className='column'>
                        <article className="card">
                            <img src={require("../assets/images/blogs.webp")} alt="" className="card-img" />
                            <div className="card-data">
                                <h2 className="card-title">Blogs</h2>
                                <p className="card-description">
                                    A dynamic space where diverse voices share insights, experiences, and knowledge. Explore engaging content, discover new perspectives, and stay informed in a digital community.</p>
                                <a href="#" className="card-btn">Check it Out</a>
                            </div>
                        </article>
                    </div>
                    <div className='column'>
                        <article className="card">
                            <img src={require("../assets/images/webnews1.png")} alt="" className="card-img" />
                            <div className="card-data">
                                <h2 className="card-title">WebNews</h2>
                                <p className="card-description"> A dynamic React application delivering real-time news updates with a sleek user interface. Stay informed and engaged with personalized content in a seamless browsing experience.</p>
                                <a href="#" className="card-btn">Check it Out</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
