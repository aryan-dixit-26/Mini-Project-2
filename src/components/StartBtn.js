import gamedata from "../games/GameData";

const StartBtn = (props) => {
  return (
    <div
      className="start"
      onClick={() => {
        if (gamedata[props.name].delay) {
          return;
        }

        if (gamedata[props.name].started) {
          gamedata[props.name].delay = true;
          gamedata[props.name].over = true;
          gamedata[props.name].set = false;


          setTimeout(() => {
            gamedata[props.name].delay = false;
          }, 100);
          props.runTime();
          props.startIt(true);

          return;
        }

        gamedata[props.name].delay = true;

        setTimeout(() => {
          gamedata[props.name].delay = false;
        }, 100);

        props.runTime();
        props.startIt();
      }}
    >
      <b>{props.str ? "Reset" : "Start"}</b>
    </div>
  );
};

export default StartBtn;
