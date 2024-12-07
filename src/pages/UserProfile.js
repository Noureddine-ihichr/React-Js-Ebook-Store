import React, { useState, useRef, useEffect } from 'react';
import { useUser } from './UserContext';
import { showToast } from '../utils/toast';
import '../styles/userprofile.css';
import { 
  FaCamera, FaEdit, FaSave, FaTimes, FaUser, 
  FaEnvelope, FaPhone, FaBook, FaBookmark, FaShoppingCart 
} from 'react-icons/fa';
import { useBookContext } from './BookContext';
import { useCartContext } from './CartContext';

const UserProfile = () => {
  const { user, updateUser } = useUser();
  const { bookmarkedBooks } = useBookContext();
  const { cart } = useCartContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user || {});
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (user) {
      setEditedUser(user);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <div className="not-logged-in">
            <FaUser className="login-icon" />
            <h2>Please log in to view your profile</h2>
          </div>
        </div>
      </div>
    );
  }

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        showToast.error('Image size should be less than 5MB');
        return;
      }

      setLoading(true);
      try {
        const reader = new FileReader();
        reader.onloadend = () => {
          setEditedUser({ ...editedUser, profilePicture: reader.result });
          showToast.success('Profile picture updated');
          setLoading(false);
        };
        reader.readAsDataURL(file);
      } catch (error) {
        showToast.error('Error updating profile picture');
        setLoading(false);
      }
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

    if (!editedUser.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showToast.error('Please enter a valid email address');
      return;
    }

    if (!editedUser.phoneNumber.match(/^\d{10}$/)) {
      showToast.error('Please enter a valid 10-digit phone number');
      return;
    }

    setLoading(true);
    try {
      updateUser(editedUser);
      setIsEditing(false);
      showToast.success('Profile updated successfully');
    } catch (error) {
      showToast.error('Error updating profile');
    }
    setLoading(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="cover-photo" />
          <div className="profile-photo-container">
            <div className="profile-photo" onClick={() => fileInputRef.current.click()}>
              {editedUser.profilePicture ? (
                <img src={editedUser.profilePicture} alt="Profile" />
              ) : (
                <div className="default-avatar">
                  <FaUser />
                </div>
              )}
              <div className="profile-photo-overlay">
                <FaCamera size={24} color="white" />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden-input"
              />
            </div>
          </div>
        </div>

        <div className="profile-body">
          {isEditing ? (
            <div className="edit-form">
              <div className="form-group">
                <div className="input-icon">
                  <FaUser className="icon" />
                  <input
                    type="text"
                    value={editedUser.name || ''}
                    onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                    placeholder="Full Name"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon">
                  <FaEnvelope className="icon" />
                  <input
                    type="email"
                    value={editedUser.email || ''}
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                    placeholder="Email Address"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon">
                  <FaPhone className="icon" />
                  <input
                    type="tel"
                    value={editedUser.phoneNumber || ''}
                    onChange={(e) => setEditedUser({ ...editedUser, phoneNumber: e.target.value })}
                    placeholder="Phone Number"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="action-buttons">
                <button 
                  className="save-btn" 
                  onClick={handleSave}
                  disabled={loading}
                >
                  <FaSave /> Save Changes
                </button>
                <button 
                  className="cancel-btn" 
                  onClick={() => {
                    setIsEditing(false);
                    setEditedUser(user);
                  }}
                  disabled={loading}
                >
                  <FaTimes /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="profile-info">
              <div className="info-grid">
                <div className="info-item">
                  <FaUser className="info-icon" />
                  <div className="info-content">
                    <span className="info-label">Name</span>
                    <span className="info-value">{user.name}</span>
                  </div>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div className="info-content">
                    <span className="info-label">Email</span>
                    <span className="info-value">{user.email}</span>
                  </div>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-item">
                  <FaShoppingCart className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-value">{cart.length}</span>
                    <span className="stat-label">Cart Items</span>
                  </div>
                </div>
                <div className="stat-item">
                  <FaBookmark className="stat-icon" />
                  <div className="stat-content">
                    <span className="stat-value">{bookmarkedBooks.length}</span>
                    <span className="stat-label">Bookmarks</span>
                  </div>
                </div>
              </div>

              <button 
                className="edit-btn" 
                onClick={handleEditClick}
                disabled={loading}
              >
                <FaEdit /> Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
