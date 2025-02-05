import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import '../styles/Post.css';

export default function Post({ name, currentPosition, message, photoURL }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={photoURL} />
        <div className="post-info">
          <h2>{name}</h2>
          <p>{currentPosition}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-react-buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={CommentOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Repost" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  )
}
