import { Link } from "react-router-dom";

const TabBar = () => {
    return (
        <div className="toolbar">
        <Link to={`/memory`} className="link">
          <b style={{color:'white'}}>Memory</b>
        </Link>
        <Link to={`/mine`} className="link">
          <b style={{color:'white'}}>Minesweeper</b>
        </Link>
        <Link to={`/leaderboard`} className="link">
          <b style={{color:'white'}}>Leaderboard</b>
        </Link>
       
        </div>
    );
  };
  
  export default TabBar;
  