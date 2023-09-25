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
    <h1>Hey<br/>{username}!<br/>Welcome to Job Plaza<br/>We're delighted to have you here</h1>
    </div>
  )
}
