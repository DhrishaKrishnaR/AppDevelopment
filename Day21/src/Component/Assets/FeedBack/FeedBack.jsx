import React, { useState } from 'react';
import './FeedBack.css';

function FeedBack() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[error,seterror]=useState(false);  
    const feedbackpage = async(event) => {
        event.preventDefault();
    if(name.length===0 || email.length===0 )
    {
      seterror(true);
    }
}
  return (
      <div className='bodyfeed'>
      <div className='mainfeed'>
      <h1 id="title">FeedBack Form</h1>
      <p id="description">Thank you for taking the time to help us improve the platform</p>
      
      <div id="form-contents">
        <form id="feed-form" className='feedform'>
          <label className="feedlabel" htmlFor="name">Name:
            <input className="feedin" id="name" type="text" value={name} onChange={e=>setName(e.target.value)} required />
          </label>
          <div>
            {error && name.length===0?
            <label style={{color:'black'}}>Name is required</label>:""} 
            </div><br/>
          <label className="feedlabel" htmlFor="email">Email:
            <input className="feedin" id="email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          </label>
          <div>
        {error && email.length===0?
        <label style={{color:'white'}}>Email is required</label>:""} 
        </div><br/>
          
          
          
         
          
          <label className="feedlabel" htmlFor="comments">Did you find our portal easy to access?</label>
          <textarea className="bio" name="bio" rows="4" placeholder="Enter your comment here..."></textarea>

         <br />
          
         <label className="feedlabel" htmlFor="comments">How useful did you find our resume builder tool</label>
          <textarea className="bio" name="bio" rows="4" placeholder="Enter your comment here..."></textarea>

         <br />
          
         <label className="feedlabel" htmlFor="comments">Any comments or suggestions?</label>
            <textarea className="bio" name="bio" rows="4" placeholder="Enter your comment here..."></textarea>
          
          <input className="feedsubmit" type="submit" value="Submit" onClick={feedbackpage} />
        </form>
      </div>
    </div>
    </div>
  );
}
export default FeedBack;
