import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  )
}
