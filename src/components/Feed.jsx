import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import NewPost from './NewPost';
import { useState } from 'react';
import '../styles/Feed.css';

export default function Feed() {
  const [input, setInput] = useState("");
  const [openNewPost, setOpenNewPost] = useState(false);
  
  return (
    <div className="feed">
      <div className="feed-input-container">
        <div className="feed-input-content">
          <Avatar src="" className="feed-avatar" />
          <button 
            className="feed-input-button" 
            onClick={() => setOpenNewPost(true)}
          >
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
      <NewPost
        input={input}
        setInput={setInput}
        open={openNewPost}
        onclose={() => setOpenNewPost(false)}
      />
    </div>
  )
}
