import { Avatar, Box, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NewPostOption from './NewPostOption';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../firebase"; 
import '../styles/NewPost.css';

export default function NewPost({ open, onClose }) {
  const [input, setInput] = useState("");

  //add posts to the firebase
  const sendPost = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newPost = {
      name: "Dilshani Hettiarachchi",
      description: "Software Engineer",
      message: input,
      photoURL: "",
      timestamp: serverTimestamp(),
    };

    console.log("Sending post", newPost);


    try {
      await addDoc(collection(db, "posts"), newPost);
      setInput("");
      if (onClose) onClose();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Modal className="new-post-modal" open={open} onClose={onClose}>
      <Box className="new-post-box">
        <form>
          <div className="new-post-header">
            <div className="new-post-user-info">
              <Avatar />
              <h2 className="new-post-user-name">Dilshani Hettiarachchi</h2>
            </div>
            <button 
              className="new-post-close-button"
              type="button"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="new-post-body">
            <textarea
              placeholder="What do you want to talk about?"
              aria-label="write your message"
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
              disabled={!input.trim()}
              onClick={(e) => sendPost(e)}
            >
              Post
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  )
}
