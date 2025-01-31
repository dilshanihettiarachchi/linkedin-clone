import SearchIcon from '@mui/icons-material/Search';
import '../../styles/headerStyles/Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" 
            alt="Linkedin logo" 
          />
          <div className="header-search">
            <SearchIcon />
            <input 
              type="search"
              placeholder="Search" 
            />
          </div>
        </div>
        <div className="header-right">
          
        </div>
      </div>
    </div>
  )
}
