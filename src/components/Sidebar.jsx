import { Avatar } from '@mui/material';
import SidebarOption from './SidebarOption';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import '../styles/Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img 
          src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Cover image" 
        />
        <div className="sidebar-user-details">
          <Avatar className="sidebar-avatar" />
          <h2>Dilshani Hettiarachchi</h2>
          <h4>Software Engineer</h4>
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
