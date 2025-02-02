import InfoIcon from '@mui/icons-material/Info';
import Suggetion from './Suggestion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../styles/Widget.css';

export default function Widget() {
  return (
    <div className="widget">
      <div className="widget-header">
        <h2>Add your feed</h2>
        <InfoIcon className="widget-header-icon" />
      </div>
      <Suggetion 
        name="Google" 
        description="Company &#8226; Software Development" 
        image="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" 
      />
      <Suggetion 
        name="Amozon Web Service (AWS)" 
        description="Company &#8226; IT Services" 
        image="https://cdn.freebiesupply.com/logos/large/2x/aws-logo-logo-png-transparent.png" 
      />
      <Suggetion 
        name="Microsoft" 
        description="Company &#8226; Software Development" 
        image="https://pngimg.com/uploads/microsoft/microsoft_PNG5.png" 
      />
      <Suggetion 
        name="W3School.com" 
        description="Company &#8226; Software Development" 
        image="https://avatars.githubusercontent.com/u/77673807?v=4" 
      />
      <button className="widget-view-all-button">View all recommendations <ArrowForwardIcon className="widgets-view-all-button-icon" /></button>
    </div>
  )
}
