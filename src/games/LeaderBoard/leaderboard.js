
const Leader = (props) => {
 
  const data = props.data;
  const memDivs = [];
  const minesDivs = [];

  if (Object.keys(props.data).length != 0) {

    data.memory.sort((a, b) => a.time - b.time).forEach((each) => {
      memDivs.push(
        <li>
          {each.name} venceu o jogo em {each.time}(t) com {each.turns}{" "}
          tentativas{" "}
        </li>
      );
    });

    data.mines.sort((a, b) => a.time - b.time).forEach((each) => {
      minesDivs.push(
        <li>
          {each.name} venceu o jogo em {each.time}(t)
        </li>
      );
    });

  }

  return (
    <div className="leader">
      <div className="holdLeader">
        <div className="memLeader">{memDivs}</div>
        <div className="minesLeader">{minesDivs}</div>
      </div>
    </div>
  );
};

export default Leader;
