import React from 'react'
import './Home.css';
import ButtonAppBar from './navbar';
import FeedBack from './Testimonial';
import Popular from './Popular';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate=useNavigate();
  const handlejob= () => {
    navigate('/job');
  };
  return (
    <div>
    <ButtonAppBar/>
    <div className="body0">
      <p className="find-the-job-that">
        Find the Job
        <br />
        that you deserve.
      </p>
    <div className="label2">
      <p className="text-wrapper">Your future starts here – find your dream job today</p>
    </div>
    <button className='find' onClick={handlejob}>Find Jobs</button>
    </div>
    <section className="popular" >
    <div className="bottom" id="scroll">
    <div className="quote1"> 
    <h2>Get Started</h2>
    <Popular/>
    </div></div></section>
    
    <FeedBack/>
    
     <section className="footer" id="footer">
     <Footer/>
            
            </section>
    </div>
  )
}

export default Home