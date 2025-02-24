import InfoIcon from '@mui/icons-material/Info';
import Suggetion from './Suggestion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import googleLogo from '../images/google.png';
import awsLogo from '../images/aws.png';
import microsoftLogo from '../images/microsoft.png';
import w3schoolLogo from '../images/w3school.png';
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
        image={googleLogo} 
      />
      <Suggetion 
        name="Amozon Web Service (AWS)" 
        description="Company &#8226; IT Services" 
        image={awsLogo}
      />
      <Suggetion 
        name="Microsoft" 
        description="Company &#8226; Software Development" 
        image={microsoftLogo}
      />
      <Suggetion 
        name="W3School.com" 
        description="Company &#8226; Software Development" 
        image={w3schoolLogo} 
      />
      <button className="widget-view-all-button">View all recommendations <ArrowForwardIcon className="widgets-view-all-button-icon" /></button>
    </div>
  )
}
