import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-first" style={{ textAlign: "center" }}>
                    <img src={require("../assets/images/logos_28.png")} height={"120px"} width={"120px"} alt="logo" className="footer-mobile"/>
                </div>

                <div className="footer-second">
                    <div style={{ textAlign: "center", fontSize: "30px" }}> <span className="navigation-button">Let's Connect </span></div>
                    <ul className="social-media-icons">
                        <li><Link target="_blank" rel="noreferrer" to="https://www.facebook.com/saurabhojhaa/"> <img className="social-media-icons-image" src={require("../assets/images/social media icons/5296500_fb_social media_facebook_facebook logo_social network_icon.png")} height={"50px"} width={"50px"} alt="Facebook" /></Link></li>
                        <li><Link target="_blank" rel="noreferrer" to="https://www.linkedin.com/in/saurabh-ojha-dev/"> <img className="social-media-icons-image" src={require("../assets/images/social media icons/5296501_linkedin_network_linkedin logo_icon.png")} height={"50px"} width={"50px"} alt="Linkdin" /> </Link></li>
                        <li><Link target="_blank" rel="noreferrer" to="https://twitter.com/saurabh28745675"> <img className="social-media-icons-image" src={require("../assets/images//social media icons/twitter.png")} height={"50px"} width={"50px"} alt="Twitter" /> </Link></li>
                        <li><Link target="_blank" rel="noreferrer" to="https://wa.me/7289976469"> <img className="social-media-icons-image" src={require("../assets/images/social media icons/5296520_bubble_chat_mobile_whatsapp_whatsapp logo_icon.png")} height={"50px"} width={"50px"} alt="Whatsapp" /> </Link></li>
                        <li><Link target="_blank" rel="noreferrer" to="https://www.youtube.com/channel/UCmTiSGOIq7-IdlnGGU46e1A"> <img className="social-media-icons-image" src={require("../assets/images/social media icons/5296521_play_video_vlog_youtube_youtube logo_icon.png")} height={"50px"} width={"50px"} alt="Youtube" /> </Link></li>
                        <li><Link target="_blank" rel="noreferrer" to="https://www.instagram.com/saurabh__ojha__12/"> <img className="social-media-icons-image" src={require("../assets/images/social media icons/5296765_camera_instagram_instagram logo_icon.png")} height={"50px"} width={"50px"} alt="Instagram" /> </Link></li>
                        <li><Link target="_blank" rel="noreferrer" to="https://github.com/Saurabh-ojha-2000"> <img className="social-media-icons-image" src={require("../assets/images/social media icons/github.png")} height={"50px"} width={"50px"} alt="Github" /> </Link></li>
                        <li><Link target="_blank" rel="noreferrer" to="https://t.me/Saurabh_ojha_developer"> <img className="social-media-icons-image" src={require("../assets/images/social media icons/986956_telegram_icon.png")} height={"50px"} width={"50px"} alt="Telegram" /> </Link></li>
                        {/* <li><Link target="_blank"  rel="noreferrer" to="mailto:sourabhojha12@gmail.com"> <img className="social-media-icons-image" src={require("../assets/images/social media icons/3377042_gmail_logo_media_social_icon.png")} height={"50px"} width={"50px"} alt="gmail" /> </Link></li> */}
                        <li><Link target="_blank" rel="noreferrer" to="https://www.snapchat.com/add/saurabh_ojh3075?share_id=kDnL8lD9nL4&locale=en-IN"> <img className="social-media-icons-image" src={require("../assets/images/social media icons/4362957_snapchat_logo_social media_icon.png")} height={"50px"} width={"50px"} alt="Snapchat" /> </Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-rights">CodeCraft by Saurabh &#169; saurabh-portfolio-creative | 2024</div>
        </>
    )
}
export default Footer;
