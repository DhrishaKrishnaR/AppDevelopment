import React, { useState } from 'react';
import './Resume.css';
import Preview from './Preview';
import ButtonAppBar from '../HomePage/navbar';

export default function Resume() {
  const [formData, setFormData] = useState({
    name: '',
    mob: '',
    email: '',
    linkedin: '',
    skill: '',
    workexp: '',
    tit: '',
    pos: '',
    achievements: '',
    pro1: '',
    pro2: '',
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleTogglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
<div>
<ButtonAppBar/>
<h2>RESUME GENERATOR</h2>
    <div className='bodyr'>
    <div className="resume-container">
      <form className="input-fields">
        <h1>Resume Generator</h1>
        <textarea type="text" className="in" name="name" placeholder="Name" onChange={handleChange} />
        <textarea type="text" className="in" name="mob" placeholder="Mobile Number" onChange={handleChange} />
        <textarea name="email" className="in" placeholder="Email" onChange={handleChange}></textarea>
        <textarea name="linkedin" className="in" placeholder="LinkedIn Profile" onChange={handleChange}></textarea>
        <textarea name="skill" className="in" placeholder="Skills" onChange={handleChange}></textarea>
        <textarea name="workexp" className="in" placeholder="Work Experience" onChange={handleChange} />
        <textarea name="tit" className="in" placeholder="Job Title" onChange={handleChange}></textarea>
        <textarea name="pos" className="in" placeholder="Job Position" onChange={handleChange}></textarea>
        <textarea name="achievements" className="in" placeholder="achievements" onChange={handleChange}></textarea>
        <textarea name="pro1" className="in" placeholder="Project Link1" onChange={handleChange}></textarea>
        <textarea name="pro2" className="in" placeholder="Project Link2" onChange={handleChange}></textarea>
        <div className="btn">
          <button className='resb' onClick={handleTogglePreview}>Preview or Edit</button>
          </div>
      </form>
        <div className="preview">
        <Preview formData={formData} />
        
        </div>
        </div>
        </div>
        </div>
      
  );
}
