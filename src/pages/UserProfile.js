// UserProfile.js
import { useUser } from '../pages/UserContext';
import '../styles/userprofile.css';

const UserProfile = () => {
  const { user } = useUser();

  if (!user) {
    return <div></div>;
  }

  return (
    <div className="user-profile-container">
      <h2 className="profile-heading">User Profile</h2>
      <div className="profile-info-container">
        <img
          src={user.profilePicture || '/images/iconprofile.png'}
          alt="Profile_Picture"
          className="profile-picture"
        />
        <div className="yellow-theme">
          <p className="profile-info">Name: {user.name}</p>
          <p className="profile-info">Email: {user.email}</p>
          <p className="profile-info">Phone Number: {user.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
