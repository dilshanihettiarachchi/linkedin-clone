import { Avatar, Box, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NewPostOption from './NewPostOption';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AddIcon from '@mui/icons-material/Add';
import '../styles/NewPost.css';

export default function NewPost({ input, setInput, open, onClose }) {
  
  return (
    <Modal className="new-post-modal" open={open}>
      <Box className="new-post-box">
        <form>
          <div className="new-post-header">
            <div className="new-post-user-info">
              <Avatar />
              <h2 className="new-post-user-name">Dilshani Hettiarachchi</h2>
            </div>
            <button 
              className="new-post-close-button"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="new-post-body">
            <textarea
              placeholder="What do you want to talk about?"
              value={input}
              onChange={(e) => setInput(e.target.value)} 
            />
            <div className="new-post-options">
              <NewPostOption Icon={ImageIcon} title="Add media" />
              <NewPostOption Icon={CalendarMonthIcon} title="Create an event" />
              <NewPostOption Icon={CelebrationIcon} title="Celebrate an occasion" />
              <NewPostOption Icon={AddIcon} title="More" />
            </div>
          </div>
          <div className="new-post-footer">
            <button 
              className="new-post-submit-button"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  )
}
