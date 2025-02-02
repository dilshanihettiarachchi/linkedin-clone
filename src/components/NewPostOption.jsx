import { Tooltip } from '@mui/material';
import '../styles/NewPostOption.css';

export default function NewPostOption({ Icon, title }) {
  return (
    <div className="new-post-option">
      <Tooltip 
        title={title} 
        placement="top"
      >
        <button className="new-post-option-button">
          <Icon />
        </button>
      </Tooltip>
    </div>
  )
}
