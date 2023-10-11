import React from 'react'
import './FAQ.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userSlice';
import ButtonAppBar from './navbar';

export default function Profile() {
    const user = useSelector(selectUser);
  console.log("User:",user);
  const username = user.user && user.user.username ? user.user.username : "Guest";
  return (
    <div className='bodypro'>
    <ButtonAppBar/>
    <div class="wrapper9">
        <div class="user-card">
            <div class="user-card-img">
              <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" alt=""/>
            </div>
            <div class="user-card-info">
              <h2>{username}</h2>
              <p><span>Email:</span> {username}@gmail.com</p>
              <p><span>Location:</span> Tamil Nadu, India</p>
              <p><span>Occupation:</span> Web Developer</p>
              <p><span>Skills:</span> HTML,CSS,JavaScript,React,Springboot</p>
              <p><span>About me:</span> Hello, I'm {username}, a passionate and experienced web developer with a strong foundation in creating dynamic and responsive web applications. I have a deep love for coding and a keen eye for design, which I combine to craft beautiful, user-friendly, and efficient digital experiences.</p>
            </div>
        </div>
    </div>
    </div>
  )
}
