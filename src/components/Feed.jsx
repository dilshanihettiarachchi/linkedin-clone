import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import NewPost from './NewPost';
import { useState, useEffect } from 'react';
import Post from './Post';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import '../styles/Feed.css';

export default function Feed() {
  const [openNewPost, setOpenNewPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  //get posts from firebase
  useEffect(() => {
    const postsCollection = collection(db, "posts");
    const postQuery = query(postsCollection, orderBy("timestamp", "desc")) //oganize post according to timestamp

    const unsubscribe = onSnapshot(postQuery, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
    return () => unsubscribe();
  }, []);
  
  return (
    <div className="feed">
      <div className="feed-input-container">
        <div className="feed-input-content">
          <Avatar src={user?.photoURL} className="feed-avatar">
            {user.displayName[0]}
          </Avatar>
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
      {posts.map(({ id, post: {name, currentPosition, message, photoURL }}) => {
        return (
          <Post 
            key={id}
            name={name}
            currentPosition={currentPosition}
            message={message}
            photoURL={photoURL}
          />
        );
      })}
      <NewPost
        open={openNewPost}
        onClose={() => setOpenNewPost(false)}
      />
    </div>
  )
}
