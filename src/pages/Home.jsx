import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';
import { useState, useEffect } from 'react';
import '../styles/Home.css';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (window.innerWidth <= 992) {
        setIsTablet(true);
        setIsMobile(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home">
      {isMobile ? <Sidebar className="home-sidebar-top" /> : <Sidebar className="home-sidebar" />}
      <Feed className="home-feed" />
      {!isMobile && !isTablet && <Widget className="home-widget" />}
    </div>
  )
}
