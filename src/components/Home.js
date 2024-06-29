import React, { useEffect } from 'react';
import { ReactTyped } from "react-typed";
import './Media_slider_carousel.css'; // Import your custom CSS for additional styling
import MediaSliderCarousel from './MediaSliderCarousel';

const Home = () => {

    useEffect(() => {
        const initializeCanvas = () => {
            console.log("Initializing canvas");
            var c = document.getElementById('canv');
            if (!c) {
                // If the canvas element is not found, do nothing
                console.log("nothing");
                return;
            }
            // Canvas code
            // var c = document.getElementById('canv');
            var $ = c.getContext('2d');
            var w = c.width = window.innerWidth; // Set your desired width
            var h = c.height = window.innerHeight; // Set your desired height
            var position = [w / 2, h / 2];
            var spacing = 24;
            var numw = w / spacing;
            var numh = h / spacing;

            var draw = function (p) {
                $.fillStyle = "hsla(38,5%,12%,.90)";
                $.fillRect(0, 0, w, h);
                $.fillStyle = "hsla(38, 25%, 90%, 1)";
                $.strokeStyle = "hsla(38, 25%, 90%, 1)";
                for (var i = 0; i < numh; i++)
                    for (var j = 0; j < numw; j++) {
                        var diagnalW = j * spacing + (i % 2 ? 0 : spacing / 2);
                        var diagnalH = i * spacing;
                        var arr1 = [position[0] - diagnalW, position[1] - diagnalH],
                            wave = Math.sqrt(arr1[0] * arr1[0] + arr1[1] * arr1[1]),
                            arr2 = [arr1[0] / wave, arr1[1] / wave],
                            angle = 50 * (Math.cos(p / 360 - wave / 105) - 1);
                        $.beginPath();
                        $.arc(diagnalW + arr2[0] * angle, diagnalH + arr2[1] * angle, 2.8, 0, 2 * Math.PI, false);
                        $.closePath();
                        $.fill();
                        for (var n = 0; n < 5; n++) {
                            var tail = 50 * (Math.cos((p - 50 * n) / 360 - wave / 105) - 1);
                            $.beginPath();
                            $.moveTo(diagnalW + arr2[0] * angle, diagnalH + arr2[1] * angle);
                            $.lineWidth = 5 - n;
                            $.lineTo(diagnalW + arr2[0] * tail, diagnalH + arr2[1] * tail);
                            $.stroke();
                        }
                    }
                var t = "Bees & Bombs".split("").join(String.fromCharCode(0x2004));
                $.font = "1.5em Courgette";
                $.fillStyle = 'hsla(38,5%,15%,1)';
                $.textBaseline = 'middle';
                $.fillText(t, (c.width - $.measureText(t).width) * 0.5, c.height * 0.485);
                var t1 = "Bouncers".split("").join(String.fromCharCode(0x2004));
                $.font = "2.5em Courgette";
                $.fillText(t1, (c.width - $.measureText(t1).width) * 0.5, c.height * 0.545);
            };

            var anim = function (p) {
                window.requestAnimationFrame(anim);
                draw(p);
            };

            anim();
        };
        initializeCanvas();
    }, []);


    return (
        <>
            {/* <!-- main section starts here --> */}

            <main>
                {/* <!-- First sections start here --> */}

                <section className="firstSection">
                    <div className="leftSection">
                        <div className='name-title'> Hi, My name is
                            <span className="purple"> Saurabh </span>
                            and I am a passionate</div>
                        <div className='developer-title'>
                            <ReactTyped
                                strings={['Full Stack Web Developer', 'Reactjs- Frontend Developer', 'Nodejs- Backend Developer']}
                                typeSpeed={40}
                                loop />
                            <br />
                        </div>
                        <div className='button' style={{textAlign:"center" }}>
                            <a href="https://drive.google.com/file/d/1q1WMhpg06MW0AGUX4htlLAoBGsPeeJM5/view?usp=drive_link" target='_blank' rel="noreferrer">   <button className="gb gb-bordered hover-slide hover-fill" id="gb10">Download Resume</button></a>
                            <a href="https://drive.google.com/file/d/1UiVjfRTPxJgljfuQOJZS3fyua8jQgP4G/view?usp=drive_link" target='_blank' rel="noreferrer" style={{ textDecoration: "none" }}>   <button className="gb gb-bordered hover-slide hover-fill" id="gb10">Download Cover Letter</button></a>
                        </div>
                    </div>
                    <div className="rightSection"><img className="homejs-image" src={require("../assets/images/bg.png")} alt="Loading" /></div>
                    <canvas id='canv'></canvas>
                </section>
                {/* <!-- First sections ends here --> */}

            
                {/* <!-- second sections start here --> */}

                <section className="secondSection">
                    <span className="text-gray">What I have done so far</span>
                    <h1>Work Experience</h1><br className='second-section-br'/>
                    <div className="box secondSection">
                        <div className="vertical">
                            <img className="image-top " src={require("../assets/images/web.png")} alt="load" />
                            <div className="vertical-title">Web Developer Intern<div className='vertical-title-date'> (Jan 2023 - Feb 2023)</div></div>
                            <div className="vertical-desc"><a className='work-experience-link' href="https://www.thesparksfoundationsingapore.org/" target='_blank' rel="noreferrer">The Sparks Foundation</a> </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src={require("../assets/images/web.png")} alt="load" />
                            <div className="vertical-title">Web Developer Intern <div className='vertical-title-date'> (April 2023 - May 2023)</div></div>
                            <div className="vertical-desc"><a className='work-experience-link' href="https://vedobi.com/" target='_blank' rel="noreferrer">Bestone Healthcare Products Private Limited </a> </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src={require("../assets/images/web.png")} alt="load" />
                            <div className="vertical-title">Full Stack Web Developer <div className='vertical-title-date'> (june 2023 - Present)</div></div>
                            <div className="vertical-desc"><a className='work-experience-link' href="https://vedobi.com/" target='_blank' rel="noreferrer">Vedobi (E-commerce) </a> </div>
                        </div>

                    </div>
                </section>

                {/* <!-- second sections ends here --> */}

             

                {/* third section starts here */}
                <section className="thirdSection">
                    <div className="container">

                        <h2 className='carousel-heading'>ACHIEVEMENTS AND CERTIFCATES</h2>

                        <div className='container'>

                            <div div className="row-achievemnts">

                                <div className='column thirdSection-column'>
                                    <article className="card">
                                        <img src={require("../assets/images/main-award.jpg")} width={"250px"} height={"250px"} alt="" className="card-img" />
                                        <div className="card-data">
                                            <h2 className="card-title">Achievement</h2>
                                            <p className="card-description"> Introduction To C Plus Plus By SkillUP
                                            </p>
                                            <a href="https://drive.google.com/file/d/1mO_PQrsnUYihcVqONsadwGsfOIAdwDqd/view?usp=drive_link" target="_blank" rel="noreferrer" className="card-btn">Check it Out</a>
                                        </div>
                                    </article>
                                </div>

                                <div className='column thirdSection-column' style={{ display: "flex" }}>
                                    <article className="card">
                                        <img src={require("../assets/images/main-award.jpg")} alt="" className="card-img" />
                                        <div className="card-data">
                                            <h2 className="card-title">Achievement</h2>
                                            <p className="card-description"> Hack The Mountains 3.0 By Sudan's Tech</p>
                                            <a href="https://drive.google.com/file/d/1DF-X-7quAkcAC0b8me32c-POI31eFLQD/view?usp=drive_link" target="_blank" rel="noreferrer" className="card-btn">Check it Out</a>
                                        </div>
                                    </article>
                                </div>

                                <div className='column thirdSection-column'>
                                    <article className="card">
                                        <img src={require("../assets/images/main-award.jpg")} alt="" className="card-img" />
                                        <div className="card-data">
                                            <h2 className="card-title">Achievement</h2>
                                            <p className="card-description">The MERN Stack By Mindluster</p>
                                            <a href="https://drive.google.com/file/d/1xGoNkRyiMmvzxndY9CA8KF4xwFDmkZ2I/view?usp=drive_link" target="_blank" rel="noreferrer" className="card-btn">Check it Out</a>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <div className='row-achievemnts-second' >

                                <div className='column'>
                                    <article className="card">
                                        <img src={require("../assets/images/main-award.jpg")} alt="" className="card-img" />
                                        <div className="card-data">
                                            <h2 className="card-title">Internship</h2>
                                            <p className="card-description">Web Developer Intern at The Sparks Foundation</p>
                                            <a href="https://drive.google.com/file/d/1u5RNQrsdCJXro4IWuZoMT_uqckT5vYX8/view?usp=sharing" target="_blank" rel="noreferrer" className="card-btn">Check it Out</a>
                                        </div>
                                    </article>
                                </div>

                                <div className='column'>
                                    <article className="card">
                                        <img src={require("../assets/images/main-award.jpg")} alt="" className="card-img" />
                                        <div className="card-data">
                                            <h2 className="card-title">Internship</h2>
                                            <p className="card-description">Web Developer Intern at Vedobi (E-commerce)</p>
                                            <a href="https://drive.google.com/file/d/18rT4TYej4E1qLuRwB9OHeBe0gNs7M_XY/view?usp=drive_link" target="_blank" rel="noreferrer" className="card-btn">Check it Out</a>
                                        </div>
                                    </article>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                {/* third section ends here */}

              

                {/* fourth section starts here */}
                <section className="fourthSection">
                    <MediaSliderCarousel />
                </section>
                {/* fourth section ends here */}

            </main >
            {/* <!-- main section ends here --> */}
        </>
    )
}
export default Home;