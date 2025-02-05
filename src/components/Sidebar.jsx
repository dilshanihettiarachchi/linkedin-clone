import { Avatar } from '@mui/material';
import SidebarOption from './SidebarOption';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import '../styles/Sidebar.css';

export default function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img 
          src="https://images.pexels.com/photos/6113665/pexels-photo-6113665.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Cover image" 
        />
        <div className="sidebar-user-details">
          <Avatar className="sidebar-avatar" src={user?.photoURL}>
            {user?.displayName[0]}
          </Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.currentPosition}</h4>
        </div> 
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Profile Viewers</p>
          <p className="sidebar-stat-number">455</p>
        </div>
        <div className="sidebar-stat">
          <p>Post impressions</p>
          <p className="sidebar-stat-number">2,345</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <SidebarOption Icon={BookmarkIcon} title="Saved Items" />
        <SidebarOption Icon={GroupsIcon} title="Groups" />
        <SidebarOption Icon={EventIcon} title="Events" />
      </div>
    </div>
  )
}
