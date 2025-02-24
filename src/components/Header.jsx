import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import ProfileDropdown from './ProfileDropdown';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import linkedinLogo from '../images/linkedinLogo.png';
import '../styles/Header.css';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const user = useSelector(selectUser);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <img 
            src={linkedinLogo} 
            alt="Linkedin logo" 
          />
          <div className="header-search">
            <SearchIcon className="header-search-icon" />
            <input 
              type="search"
              placeholder="Search" 
            />
          </div>
        </div>
        <div className="header-right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={TextsmsIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <div className="header-profile">
            <Avatar className="header-profile-avatar" src={user?.photoURL} onClick={() => setOpenDropdown(true)}>
              {user?.displayName[0]}
            </Avatar>
            <h3 className="header-profile-title">Me</h3>
            <ProfileDropdown 
              open={openDropdown}
              onClose={() => setOpenDropdown(false)}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
