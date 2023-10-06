import React from 'react'
import './Footer.css';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate=useNavigate();
  const faqnavigate = () => {
    navigate('/faq');
  };
  return (
    <div className='bodyl'>  <footer>
    <div className="row">
      
    <div className="labelf">
    <p className="WE-d-LIKE-LOVE-TO">
      <span className="text-wrapper">WE’D </span>
      <span className="span">LIKE</span>
      <span className="text-wrapper">
        {" "}
        &amp;
        <br />
      </span>
      <span className="text-wrapper-2">LOVE</span>
      <span className="text-wrapper"> TO HELP.</span>
    </p>
  </div>

      <div className="column"><br/><br/>
        <h4 className='col'>
        Quick Links</h4>
        <ul>
          <li>
            <a href="/job" className='foo'>
              Find Jobs</a>
          </li>
          <li>
          <a href="/policy" className='foo'>
          Privacy and Policy</a>
          </li>
          <li>
          <a href="/terms" className='foo'>
          Terms and Conditions</a>
          </li>
          <li>Need Help?  
            <a href="/contact" className='foo'>
              Contact us</a>
          </li>
        </ul>
      </div>

      <div className="column"><br/><br/>
        <h4 className='col'>Connect with Us</h4>
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/">
            <img src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png" className="image" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/accounts/login/">
            <img src="https://cdn-icons-png.flaticon.com/512/4103/4103007.png" className="image" alt="" />
            </a>
          </li>
          
           <li>
             <a href="https://www.linkedin.com/in/dhrisha-krishna-213599225/">
             <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-net2o24e.png" className="image" alt="" />
             </a>
           </li>
        </ul>
      </div>
      
      </div><br></br>
      <h2 className="below-links">"Explore our FAQ section for valuable insights <br/>and answers to enhance your job search experience."</h2><br/>
      <button className="buttonf" onClick={faqnavigate}><b>FAQ</b></button>
    <p className="copyright">© Job Plaza  {new Date().getFullYear()} All Rights Reserved</p>
  </footer></div>
  )
}
