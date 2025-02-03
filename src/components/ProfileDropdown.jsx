import { Box, Modal, Avatar } from '@mui/material';
import ProfileOption from './ProfileOption'
import '../styles/ProfileDropdown.css';

export default function ProfileDropdown({ open, onClose }) {
  return (
    <Modal className="profile-dropdown" open={open} onClose={onClose}>
      <Box className="profile-dropdown-box">
      <div className="profile-dropdown-top">
          <div className="profile-dropdown-user-info">
            <Avatar src="" className="profile-dropdown-avatar"/>
              <div className="profile-dropdown-user-description">
                <h2>Dilshani Hettiarachchi</h2>
                <h4>Software Engineer</h4>
              </div>
          </div>
          <button className="profile-dropdown-view-button">View Profile</button>
        </div>
        <div className="profile-dropdown-bottom">
          <ProfileOption title="Account" options={["Setting & Privacy", "Help", "Language"]} />
          <hr />
          <ProfileOption title="Account" options={["Posts & Activity", "Job Posting Account"]} />
        </div>
        <button className="logout-button">Sign Out</button>
      </Box>
    </Modal>
  )
}
