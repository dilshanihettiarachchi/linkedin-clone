import { Box, Modal, Avatar } from '@mui/material';
import ProfileOption from './ProfileOption';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { logout } from '../redux/userSlice';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import '../styles/ProfileDropdown.css';

export default function ProfileDropdown({ open, onClose }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout())
    auth.signOut();
    if (onClose) onClose();
  }

  return (
    <Modal className="profile-dropdown" open={open} onClose={onClose}>
      <Box className="profile-dropdown-box">
      <div className="profile-dropdown-top">
          <div className="profile-dropdown-user-info">
            <Avatar src={user?.photoURL} className="profile-dropdown-avatar">
              {user?.displayName?.[0]}
            </Avatar>
              <div className="profile-dropdown-user-description">
                <h2>{user?.displayName}</h2>
                <h4>{user?.currentPosition}</h4>
              </div>
          </div>
          <button className="profile-dropdown-view-button">View Profile</button>
        </div>
        <div className="profile-dropdown-bottom">
          <ProfileOption title="Account" options={["Setting & Privacy", "Help", "Language"]} />
          <hr />
          <ProfileOption title="Account" options={["Posts & Activity", "Job Posting Account"]} />
        </div>
        <Link to="/login">
          <button className="logout-button" onClick={logoutApp}>Sign Out</button>
        </Link>
      </Box>
    </Modal>
  )
}
