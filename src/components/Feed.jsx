import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import '../styles/Feed.css';

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed-input-container">
        <div className="feed-input-content">
          <Avatar src="" className="feed-avatar" />
          <button className="feed-input-button">
            Start a post, try writing with AI
          </button>
        </div>
        <div className="feed-input-options">
          <InputOption 
            Icon={ImageIcon} 
            title="Media" 
            color="#378fe9"
          />
          <InputOption 
            Icon={CalendarMonthIcon} 
            title="Event" 
            color="#c37d16" 
          />
          <InputOption 
            Icon={ArticleIcon} 
            title="Write article" 
            color="#e06847" 
          />
        </div>
      </div>
    </div>
  )
}
