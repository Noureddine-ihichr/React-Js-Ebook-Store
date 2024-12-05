import React, { useState, useRef } from 'react';
import { useUser } from './UserContext';
import { showToast } from '../utils/toast';
import '../styles/userprofile.css';

const UserProfile = () => {
  const { user, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user || {});
  const fileInputRef = useRef(null);

  if (!user) {
    return (
      <div className="user-profile-container">
        <div className="not-logged-in">
          <h2>Please log in to view your profile</h2>
        </div>
      </div>
    );
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        showToast.error('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedUser({ ...editedUser, profilePicture: reader.result });
        showToast.success('Profile picture updated');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedUser(user);
  };

  const handleSave = () => {
    if (!editedUser.name || !editedUser.email || !editedUser.phoneNumber) {
      showToast.error('All fields are required');
      return;
    }

    updateUser(editedUser);
    setIsEditing(false);
    showToast.success('Profile updated successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser(user);
    showToast.info('Changes cancelled');
  };

  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-avatar-container">
          <div className="profile-avatar-wrapper">
            <img
              src={isEditing ? editedUser.profilePicture || '/images/iconprofile.png' : user.profilePicture || '/images/iconprofile.png'}
              alt="Profile"
              className="profile-avatar"
            />
            {isEditing && (
              <div className="avatar-overlay">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="file-input"
                  id="profile-upload"
                />
                <label htmlFor="profile-upload" className="upload-button">
                  <i className="fas fa-camera"></i>
                  Change Photo
                </label>
              </div>
            )}
          </div>
          <h2 className="profile-name">{user.name}</h2>
        </div>
      </div>

      <div className="profile-content">
        {isEditing ? (
          <div className="profile-edit-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={editedUser.name || ''}
                onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={editedUser.email || ''}
                onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={editedUser.phoneNumber || ''}
                onChange={(e) => setEditedUser({ ...editedUser, phoneNumber: e.target.value })}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="profile-actions">
              <button className="save-button" onClick={handleSave}>
                Save Changes
              </button>
              <button className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="profile-info">
            <div className="info-section">
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Full Name</span>
                  <span className="info-value">{user.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">{user.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone</span>
                  <span className="info-value">{user.phoneNumber}</span>
                </div>
              </div>
              <button className="edit-button" onClick={handleEditClick}>
                Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
