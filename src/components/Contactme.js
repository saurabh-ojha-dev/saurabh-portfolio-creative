import React from 'react'
import "../assets/css/contactme.css"

const Contactme = () => {
  return (<>
    <div className='contact-me-main-section'>
      <h1 className='contact-me-heading text-center my-4'> <span className='contact-me-heading-green'>Subscribe </span> Newsletter</h1>
      {/* <p className='contact-me-heading-description text-center my-2'>Leave a message below, and I'll get back to you as soon as possible</p> */}
    </div>

    <div className='row' style={{ justifyContent: "center" }}>
      <input type="email" className='contact-me-subscribe' required placeholder="Enter Your Email"></input>
      <button type='submit' className='contact-me-button'>Subscribe</button>
    </div>

    <div className='contact-me-main-section'>
      <h1 className='contact-me-heading text-center my-4'> Get In Tou<span className='contact-me-heading-green'>ch with Me </span></h1>
      <p className='contact-me-heading-description text-center my-2'>Leave a message below, and I'll get back to you as soon as possible</p>
    </div>
<br />
    <div className='container' style={{ backgroundColor: "wheat", borderRadius:"40px" }}>

      <div className='row'>

        <div className='column'>
          <h3 className='heading-contact-me' > JUST MESSAGE ME</h3>

          <div className='col-contact-me-leftside'>
            <input className='col-contact-me-leftSide' type="text" placeholder='Your Name' />
          </div>

          <div className='col-contact-me-leftside'>
            <input className='col-contact-me-leftSide' type="email" placeholder='Your Email' />
          </div>

          <div className='col-contact-me-leftside'>
            <input className='col-contact-me-leftSide' type="text" placeholder='Your Message Subject' />
          </div>

          <div className='col-contact-me-leftside'>
            <textarea className='col-contact-me-leftSide' id="textarea-border" type="text" placeholder='Write Your Message' />
          </div>

          <div className='col-contact-me-leftside'>
            <button type="submit" className='col-contact-me-button'>Contact</button>
          </div>

        </div>

        <div className='column'>
          <h3 className='heading-contact-me'>CONTACT INFORMATION</h3>

          <div className='row' id="contact-information">
            <div className='col-md-2'> <i className="fa-regular fa-envelope" id="iframe"></i> </div>
            <div className='col' id="contact-information-text">Email<br />sourabhojha12@gmail.com</div>
            
          </div>

          <div className='row' id="contact-information">
            <div className='col-md-2'> <i className="fa-solid fa-phone" id="iframe"></i> </div>
            <div className='col' id="contact-information-text">Phone<br /> 7289976469</div>
          </div>

          <div className='row' id="contact-information">
            <div className='col-md-2'> <i className="fa-solid fa-house" id="iframe"></i> </div>
            <div className='col' id="contact-information-text"> Address<br /> Rajendra Park Extension, Nangloi, Delhi, India </div>
          </div>

          <div className='col heading-contact-me'>Visit my social profile and get connected</div>
        </div>

      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
  </>
  )
}

export default Contactme
