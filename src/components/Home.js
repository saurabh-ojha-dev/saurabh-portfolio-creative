import React, { useEffect } from 'react';
import { ReactTyped } from "react-typed";


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
                        var arr = [position[0] - diagnalW, position[1] - diagnalH],
                            wave = Math.sqrt(arr[0] * arr[0] + arr[1] * arr[1]),
                            arr = [arr[0] / wave, arr[1] / wave],
                            angle = 50 * (Math.cos(p / 360 - wave / 105) - 1);
                        $.beginPath();
                        $.arc(diagnalW + arr[0] * angle, diagnalH + arr[1] * angle, 2.8, 0, 2 * Math.PI, false);
                        $.closePath();
                        $.fill();
                        for (var n = 0; n < 5; n++) {
                            var tail = 50 * (Math.cos((p - 50 * n) / 360 - wave / 105) - 1);
                            $.beginPath();
                            $.moveTo(diagnalW + arr[0] * angle, diagnalH + arr[1] * angle);
                            $.lineWidth = 5 - n;
                            $.lineTo(diagnalW + arr[0] * tail, diagnalH + arr[1] * tail);
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
                            and i am a passionate</div>
                        <div className='developer-title'>
                            <ReactTyped
                                strings={['MERN Stack Developer', 'Reactjs- Frontend Developer', 'Nodejs- Backend Developer']}
                                typeSpeed={40}
                                loop />
                            <br />
                        </div>
                        <div className='button'>
                            <button className="gb gb-bordered hover-slide hover-fill" id="gb10">Download Resume</button>
                            <button className="gb gb-bordered hover-slide hover-fill" id="gb10">Github Link</button>
                        </div>
                    </div>
                    <div className="rightSection"><img className="homejs-image" src={require("../assets/images/bg.png")} alt="Loading" /></div>
                    <canvas id='canv'></canvas>
                </section>
                {/* <!-- First sections ends here --> */}

                <hr />
                {/* <!-- second sections start here --> */}

                <section className="secondSection">
                    <span className="text-gray">What I have done so far</span>
                    <h1>Work Experince</h1><br />
                    <div className="box">
                        <div className="vertical">
                            <img className="image-top " src={require("../assets/images/web.png")} alt="load" />
                            <div className="vertical-title">Web Developer <div className='vertical-title-date'> (Jan 2023 - Feb 2023)</div></div>
                            <div className="vertical-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsa! </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src={require("../assets/images/web.png")} alt="load" />
                            <div className="vertical-title">Php Developer <div className='vertical-title-date'> (Jan 2023 - Feb 2023)</div></div>
                            <div className="vertical-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsa! </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src={require("../assets/images/web.png")} alt="load" />
                            <div className="vertical-title">React Developer <div className='vertical-title-date'> (Jan 2023 - Feb 2023)</div></div>
                            <div className="vertical-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsa! </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src={require("../assets/images/web.png")} alt="load" />
                            <div className="vertical-title">Mern Stack Developer<div className='vertical-title-date'>  (Jan 2023 - Feb 2023)</div></div>
                            <div className="vertical-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsa! </div>
                        </div>
                    </div>
                </section>
                {/* <!-- second sections ends here --> */}
            </main>
            {/* <!-- main section ends here --> */}
        </>
    )
}
export default Home;