import React from 'react'
import './Home.css';
import ButtonAppBar from './navbar';


function Home() {
  return (
    <div>
    <ButtonAppBar/>
    <div className="body0">
    <section className="head">
    <h1 >Job Plaza</h1><br/><h2>"Turning Resumes into Realities."</h2><br/><h3>Find jobs that you deserve.</h3>
    </section>
    </div>
    <section className="about" id="aboutme">
    <div className="bottom" id="scroll">
    <div className="quote1"> 
    <h2 >About:</h2>
    <center><img className="prof" src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=826&t=st=1695230010~exp=1695230610~hmac=4053d42df2f48163dce13245586a7c71ab0c7bbcc6c8e1225c4c9e671918174b"></img></center>
    <center>Our job searching portal is a digital platform that 
    serves as a valuable resource for individuals seeking employment opportunities. This portals act as virtual
     marketplaces, connecting job seekers with a vast array of job listings from numerous employers and industries.
      Job seekers can explore various job roles, industries, and locations, making it easier to find positions that 
      align with their skills, qualifications, and career goals. Additionally, it often offer tools
       and features such as resume creation, application tracking, and email notifications, streamlining the job search
        process. For employers, these portals provide a convenient way to reach a broad audience of potential candidates 
        and facilitate the recruitment process. Overall, job searching portals play a pivotal role in modern job markets 
        by bridging the gap between job seekers and employers, fostering connections, and helping individuals advance their careers</center>
     </div></div></section>
     <section className="footer" id="footer">
     <div className="footer" id="contact">
          <div className="sb_footer section">
          <div className="sb_footer-links">
          <div className="sb_footer-links-div">
          <h4>Quick Links:</h4>
          <a href='#aboutme'>
          <p>AboutUs</p>
          </a>
          <a href='/job'>
              <p>Find Jobs</p>
              </a>
              <p>Resume Builder</p>
              <p>Privacy and Security</p>
          </div>
          <div className="sb_footer-links-div">
            <h4>Contact Us:</h4>
            <p>Email 1:<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noopener noreferrer">dhrishakrishna24@gmail.com</a></p>
            <p>Email 2:jobsearch@gmail.com</p>
            <p>Mobile Number: 9345750903</p>
            </div>
          
            </div>
            </div>
       <hr></hr>
       <div className="sb_footer-below">
       <div className="sb_footer-copyright">
       <p>
       @Copyright {new Date().getFullYear()} Dhrisha Krishna. All right reserved.</p></div>
       </div>
            </div>
            </section>
    </div>
  )
}

export default Home