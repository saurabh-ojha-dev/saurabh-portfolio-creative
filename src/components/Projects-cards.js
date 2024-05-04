import React from 'react'
import "../assets/css/projects.css"

function cards() {
    return (
        <div>
            <main class="main">
                <section class="card-area">
                    {/* <!-- Card: City --> */}
                    <section class="card-section">
                        <div class="card">
                            <div class="flip-card">
                                <div class="flip-card__container">
                                    <div class="card-front">
                                        <div class="card-front__tp card-front__tp--city">                                    
                                            <h2 class="card-front__heading">ReactJS</h2>
                                            <p class="card-front__text-price">
                                                Framework
                                            </p>
                                        </div>

                                        <div class="card-front__bt">
                                            <p class="card-front__text-view card-front__text-view--city">
                                                View me
                                            </p>
                                        </div>
                                    </div>
                                    <div class="card-back">
                                        {/* <video class="video__container" autoplay muted loop> */}
                                            <img src={require("../assets/images/reactjs.avif")} height={"240px"} width={"240px"} alt="load" />
                                        {/* </video> */}
                                    </div>
                                </div>
                            </div>

                            <div class="inside-page">
                                <div class="inside-page__container">
                                    <h3 class="inside-page__heading inside-page__heading--city">
                                        For urban lovers
                                    </h3>
                                    <p class="inside-page__text">
                                        As cities never sleep, there are always something going on, no matter what time!
                                    </p>
                                    <a href="#" class="inside-page__btn inside-page__btn--city">View deals</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Card: Ski --> */}
                    <section class="card-section">
                        <div class="card">
                            <div class="flip-card">
                                <div class="flip-card__container">
                                    <div class="card-front">
                                        <div class="card-front__tp card-front__tp--ski">
                                           
                                            <h2 class="card-front__heading">
                                                Ski trip
                                            </h2>
                                            <p class="card-front__text-price">
                                                From £199
                                            </p>
                                        </div>

                                        <div class="card-front__bt">
                                            <p class="card-front__text-view card-front__text-view--ski">
                                                View me
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card-back">
                                        <video class="video__container" autoplay muted loop>
                                            <source class="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>

                            <div class="inside-page">
                                <div class="inside-page__container">
                                    <h3 class="inside-page__heading inside-page__heading--ski">
                                        For snow lovers
                                    </h3>
                                    <p class="inside-page__text">
                                        Love snow? Why not take up exciting ski-in sessions and hit the slope?
                                    </p>
                                    <a href="#" class="inside-page__btn inside-page__btn--ski">View deals</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Card: Beach --> */}
                    <section class="card-section">
                        <div class="card">
                            <div class="flip-card">
                                <div class="flip-card__container">
                                    <div class="card-front">
                                        <div class="card-front__tp card-front__tp--beach">
                                           
                                            <h2 class="card-front__heading">
                                                Beach time
                                            </h2>
                                            <p class="card-front__text-price">
                                                From £229
                                            </p>
                                        </div>

                                        <div class="card-front__bt">
                                            <p class="card-front__text-view card-front__text-view--beach">
                                                View me
                                            </p>
                                        </div>
                                    </div>
                                    <div class="card-back">
                                        <video class="video__container" autoplay muted loop>
                                            <source class="video__media" src="https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>

                            <div class="inside-page">
                                <div class="inside-page__container">
                                    <h3 class="inside-page__heading inside-page__heading--beach">
                                        For sun lovers
                                    </h3>
                                    <p class="inside-page__text">
                                        Relax and get sun-kissed tan in the sea or take up surfting for an adventure!
                                    </p>
                                    <a href="#" class="inside-page__btn inside-page__btn--beach">View deals</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Card: Camping --> */}
                    <section class="card-section">
                        <div class="card">
                            <div class="flip-card">
                                <div class="flip-card__container">
                                    <div class="card-front">
                                        <div class="card-front__tp card-front__tp--camping">
                                          
                                            <h2 class="card-front__heading">
                                                Camping trek
                                            </h2>
                                            <p class="card-front__text-price">
                                                From £129
                                            </p>
                                        </div>

                                        <div class="card-front__bt">
                                            <p class="card-front__text-view card-front__text-view--camping">
                                                View me
                                            </p>
                                        </div>
                                    </div>
                                    <div class="card-back">
                                        <video class="video__container" autoplay muted loop>
                                            <source class="video__media" src="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>

                            <div class="inside-page">
                                <div class="inside-page__container">
                                    <h3 class="inside-page__heading inside-page__heading--camping">
                                        For nature lovers
                                    </h3>
                                    <p class="inside-page__text">
                                        Get your boots on for some hiking and explore all the beautiful scenery of nature!
                                    </p>
                                    <a href="#" class="inside-page__btn inside-page__btn--camping">View deals</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <footer class="footer">
                    <p class="footer-text">&copy; 2021 Created by Maza designDev</p>
                </footer>
            </main>

        </div>
    )
}

export default cards
