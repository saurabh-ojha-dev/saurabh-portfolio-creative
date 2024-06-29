import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contactme = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const handleNewsLetter = (e) => {
    e.preventDefault();
    window.location.reload();
  }

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kuvkscp', 'template_waufylf', form.current, 'eWOdcuo_MhMjej1cF')
      .then((response) => {
        // console.log('SUCCESS!', response);
        setName('');
        setEmail('');
        setMessageSubject('');
        setMessage('');
        setPopupVisible(true);
        setTimeout(()=>{
          setPopupVisible(false);
        },3000) // Hide the popup after 3 seconds
      }, (error) => {
        // console.log('FAILED...', error.text);
      });
  };

  return (
    <>
     {popupVisible && ( <div className="popup"> <p>Message sent successfully!</p> </div> )}
      <div className='contact-me-main-section'>
        <h1 className='contact-me-heading text-center my-4'>
          <span className='contact-me-heading-green'>Subscribe</span> Newsletter
        </h1>
        {/* <p className='contact-me-heading-description text-center my-2'>Leave a message below, and I'll get back to you as soon as possible</p> */}
      </div>

      <div className='row mobile-subscribe-row' style={{ marginRight: "0px" }}>
        <form className='form mobile-subscribe' onSubmit={handleNewsLetter} style={{ textAlign: "center" }}>
          <input type="email" className='contact-me-subscribe' required placeholder="Enter Your Email" value={newsletter} onChange={(e) => setNewsletter(e.target.value)} />
          <button type='submit' className='contact-me-button'>Subscribe</button>
        </form>
      </div>

      <div className='contact-me-main-section'>
        <h1 className='contact-me-heading text-center my-4'>
          Get In Tou<span className='contact-me-heading-green'>ch with Me</span>
        </h1>
        <p className='contact-me-heading-description text-center my-2'>
          Leave a message below, and I'll get back to you as soon as possible
        </p>
      </div>

      <br />

      <div className='container calling-section-mobile'>

        <div className='row form-section-mobile'>
          <div className='column'>
            <h3 className='heading-contact-me'>CONTACT ME</h3>

            <form ref={form} onSubmit={handleSubmit}>

              <div className='col-contact-me-leftside'>
                <input className='col-contact-me-leftSide' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name' name="from_name" required/>
              </div>

              <div className='col-contact-me-leftside'>
                <input className='col-contact-me-leftSide' type="email" placeholder='Your Email' name="from_email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>

              <div className='col-contact-me-leftside'>
                <input className='col-contact-me-leftSide' type="text" placeholder='Your Message Subject' name="message_subject" value={messageSubject} onChange={(e) => setMessageSubject(e.target.value)} required/>
              </div>

              <div className='col-contact-me-leftside'>
                <textarea className='col-contact-me-leftSide' id="textarea-border" placeholder='Write Your Message' name="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
              </div>

              <div className='col-contact-me-leftside'>
                <button type="submit" className='col-contact-me-button'>Send Message</button>
              </div>

            </form>
          </div>

          <div className='column'>
            <h3 className='heading-contact-me'>CONTACT INFORMATION</h3>

            <div className='row ci-row' id="contact-information">
              <div className='col-md-2'>
                <i className="fa-regular fa-envelope" id="iframe"></i>
              </div>
              <div className='col' id="contact-information-text">
                Email<br />sourabhojha12@gmail.com
              </div>
            </div>

            <div className='row ci-row' id="contact-information">
              <div className='col-md-2'>
                <i className="fa-solid fa-phone" id="iframe"></i>
              </div>
              <div className='col' id="contact-information-text">
                Phone<br /> 7289976469
              </div>
            </div>

            <div className='row ci-row' id="contact-information">
              <div className='col-md-2'>
                <i className="fa-solid fa-house" id="iframe"></i>
              </div>
              <div className='col' id="contact-information-text">
                Address<br /> Rajendra Park Extension, Nangloi, Delhi, India
              </div>
            </div>

            <div className='col heading-contact-me'>
              Visit my social profile and get connected
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Contactme;
