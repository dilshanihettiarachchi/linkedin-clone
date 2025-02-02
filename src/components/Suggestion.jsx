import { Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../styles/Suggestion.css';

export default function Suggetion({ image, name, description}) {
  return (
    <div className="suggestion">
      <Avatar className="suggestion-avatar" src={image} />
        <div className="suggestion-info">
          <div className="suggestion-description">
            <h2>{name}</h2>
            <h4>{description}</h4>
          </div>
          <button><AddIcon className="suggestion-button-icon" /> Follow</button>
        </div>
    </div>
  )
}
