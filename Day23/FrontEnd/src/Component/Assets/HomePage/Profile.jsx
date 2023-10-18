import React, { useState, useEffect } from 'react';
import './FAQ.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userSlice';
import ButtonAppBar from './navbar';

export default function Profile() {
  const user = useSelector(selectUser);
  const [isEditing, setIsEditing] = useState(false); // Local state to manage editing mode
  const [editedProfile, setEditedProfile] = useState({
    username: user.user && user.user.username,
    email: `${user.user.username}@gmail.com`,
    location: 'Tamil Nadu, India',
    occupation: 'Web Developer',
    skills: 'HTML, CSS, JavaScript, React, Springboot',
    aboutMe: `Hello, I'm ${user.user.username ? user.user.username : ''}, a passionate and experienced web developer with a strong foundation in creating dynamic and responsive web applications. I have a deep love for coding and a keen eye for design, which I combine to craft beautiful, user-friendly, and efficient digital experiences.`,
  });

  // Load edited profile from local storage on page load
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('editedProfile'));
    if (storedProfile) {
      setEditedProfile(storedProfile);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited profile to local storage
    localStorage.setItem('editedProfile', JSON.stringify(editedProfile));
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Cancel editing and reset the profile to its original values
    const storedProfile = JSON.parse(localStorage.getItem('editedProfile'));
    setEditedProfile(storedProfile);
    setIsEditing(false);
  };

  return (
    <div className='bodypro'>
      <ButtonAppBar />
      <div className='wrapper9'>
        <div className='user-card'>
          <div className='user-card-img'>
            <img src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg' alt='' />
          </div>
          <div className='user-card-info'>
            <p>
              <span>Name:</span>{' '}
              {isEditing ? (
                <input
                  type='text'
                  value={editedProfile.username}
                  onChange={(e) => setEditedProfile({ ...editedProfile, username: e.target.value })}
                />
              ) : (
                editedProfile.username
              )}
            </p>
            <p>
              <span>Email:</span>{' '}
              {isEditing ? (
                <input
                  type='text'
                  value={editedProfile.email}
                  onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                />
              ) : (
                editedProfile.email
              )}
            </p>
            <p>
              <span>Location:</span>{' '}
              {isEditing ? (
                <input
                  type='text'
                  value={editedProfile.location}
                  onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                />
              ) : (
                editedProfile.location
              )}
            </p>
            <p>
              <span>Occupation:</span>{' '}
              {isEditing ? (
                <input
                  type='text'
                  value={editedProfile.occupation}
                  onChange={(e) => setEditedProfile({ ...editedProfile, occupation: e.target.value })}
                />
              ) : (
                editedProfile.occupation
              )}
            </p>
            <p>
              <span>Skills:</span>{' '}
              {isEditing ? (
                <input
                  type='text'
                  value={editedProfile.skills}
                  onChange={(e) => setEditedProfile({ ...editedProfile, skills: e.target.value })}
                />
              ) : (
                editedProfile.skills
              )}
            </p>
            <p>
              <span>About me:</span>{' '}
              {isEditing ? (
                <textarea
                  value={editedProfile.aboutMe}
                  onChange={(e) => setEditedProfile({ ...editedProfile, aboutMe: e.target.value })}
                />
              ) : (
                editedProfile.aboutMe
              )}
            </p>
            {isEditing ? (
              <div className='button-container'>
                <button className='save-button' onClick={handleSave}>
                  Save
                </button>
                <button className='cancel-button' onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            ) : (
              <button className='edit-button' onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
