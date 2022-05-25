import { Link } from "react-router-dom";

const TabBar = () => {
    return (
        <div className="toolbar">
        <Link to={`/memory`} className="link toolbar-b">
          <b>Memory</b>
        </Link>
        <Link to={`/mine`} className="link toolbar-b">
          <b  >Minesweeper</b>
        </Link>
        {/* <Link to={`/leaderboard`} className="link">
          <b style={{color:'white'}}>Leaderboard</b>
        </Link> */}
       
        </div>
    );
  };
  
  export default TabBar;
  