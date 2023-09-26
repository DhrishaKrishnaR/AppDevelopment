import React from 'react'
import './Contact.css';
import ButtonAppBar from '../HomePage/navbar';

export default function Contact() {
  return (
    <div>
    <ButtonAppBar/>
    <div className="bodyc">
    <div class="contains">

    <div class="wrapper8">
  
      <div class="form">
        <h4>GET IN TOUCH WITH US</h4>
        <h2 class="form-headline">Send us a message</h2>
        <h2 class="form-headline">We would love to hear from you</h2><br/><br/>
        <form id="submit-form" action="" className='con'>
          <p>
          <label className='lc'>Name:</label>
            <input id="name" class="form-input" type="text" placeholder="Your Name"/>
            <small class="name-error"></small>
          </p>
          <p>
          <label className='lc'>Email:</label>
            <input id="email" class="form-input" type="email" placeholder="Your Email"/>
            <small class="name-error"></small>
          </p>
          
          <p class="full-width">
          <label className='lc'>Message:</label>
            <textarea  minlength="10" id="message" cols="30" rows="7" placeholder="Your Message" required></textarea>
            <small></small>
          </p>
          
          <p class="full-width">
            <input type="submit" class="submit-btn" value="Submit" onclick="checkValidations()"/>
            <button class="reset-btn" onclick="reset()">Reset</button>
          </p>
        </form>
      </div>
  
      <div class="contacts contact-wrapper">
  
        <ul>
        <li>  <span class="highlight-text-grey">You can move to <a href="/faq" class="faqc">FAQs</a> or Support page to get more information about our site.</span> </li>
          <li>Need help or have any query?  <span class="highlight-text-grey"></span>  Don't hesitate, you can directly shoot us an email or call us
          how we can help you?</li>
          <span class="hightlight-contact-info">
          <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> jobplaza@email.com</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+91 98 1789 2900</span></li>
          </span>
        </ul>
      </div>
    </div>
  </div></div></div>
  )
}
