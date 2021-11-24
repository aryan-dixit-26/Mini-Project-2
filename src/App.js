import "./assets/Styles/App.css";
import "./assets/Styles/memory.css";
import "./assets/Styles/leaderboard.css";
import { useState } from "react";
import Timer from "./components/Timer";
import gamedata from "./games/GameData";
import StartBtn from "./components/StartBtn";
import Points from "./components/Points";
import TabBar from "./components/TabBar";
import ChoiceBtn from "./components/ChoiceBtn";
import api from "./Arch/api.js";
import http from "./Arch/http.js";
import { useEffect } from "react";

const App = (Jogo, nome) => {

  const [tempoMem, settempoMem] = useState(gamedata.memory.time);
  const [startedMem, setstartedMem] = useState(gamedata.memory.started);
  const [pointsMem, setpointsMem] = useState(gamedata.memory.tries);

  const [tempoMine, settempoMine] = useState(gamedata.mine.time);
  const [startedMine, setstartedMine] = useState(gamedata.mine.started);
  const [pointsMine, setpointsMine] = useState(gamedata.mine.pontos);

  const [apiLoading, setApiLoading] = useState(true);

    useEffect(() => {
      http.get("/Memory").then(res => {
        const memData = res.data;

        http.get("/Mines").then((res2)=>{

          gamedata.leaderBoard = {'memory':memData,'mines':res2.data}

          if(nome === 'leaderboard'){
            setApiLoading(false);
            }

        })

      });
    }, []);


  const runTimer = () => {
    if (gamedata[nome].over) {
      clearInterval(gamedata[nome].timerId);
      gamedata[nome].time = 0;
      gamedata[nome].started = false;
      gamedata[nome].tries = 0;
      gamedata[nome].found = 0;
      gamedata[nome].pontos = 0;
      gamedata[nome].over = false;
      path[nome].tempo.setVar(gamedata[nome].time);
      path[nome].started.setVar(gamedata[nome].started);
      path[nome].points.setVar(gamedata[nome].tries);

      return;
    }
    path[nome].startTimer();
    gamedata[nome].timerId = setInterval(() => path[nome].startTimer(), 1000);
  };

  let newTimeMem = tempoMem;
  let newTimeMine = tempoMine;

  const path = {
    memory: {
      tempo: { var: tempoMem, setVar: settempoMem },
      started: { var: startedMem, setVar: setstartedMem },
      startTimer: () => {
        newTimeMem++;
        gamedata.memory.time = newTimeMem;
        settempoMem(newTimeMem);
      },
      startGame: (order) => {
        if (order) {
          gamedata.memory.over = false;
          return;
        }

        gamedata.memory.started = true;
        setstartedMem(gamedata.memory.started);
        const allCards = document.getElementsByClassName("cartas");

        const copy = [...allCards];

        copy.forEach((e) => {
          e.classList.remove("virado");
        });
      },
      points: {
        var: pointsMem,
        setVar: (value) => {
          setpointsMem(value);
        },
      },
    },
    mine: {
      tempo: { var: tempoMine, setVar: settempoMine },
      started: { var: startedMine, setVar: setstartedMine },
      startTimer: () => {
        newTimeMine++;
        gamedata.mine.time = newTimeMine;
        settempoMine(newTimeMine);
      },
      startGame: (order) => {
        if (order) {
          gamedata.mine.started = false;
          gamedata.mine.set = false;
          return;
        }
        gamedata.mine.started = true;
        setstartedMine(gamedata.mine.started);
      },
      points: {
        var: pointsMine,
        setVar: (value) => {
          setpointsMine(value);
        },
      },
    },
    leaderboard:{
      tempo: { var: 'null', setVar: 'null' },
      started: { var: 'null', setVar: 'null' },
      startTimer: 'null',
      startGame: (order) => {
        return 'null'
      },
      points: {
        var: 'null',
        setVar: (value) => {
          return 'null'
        },
      },
    }
  };

  if (
    nome === "memory" &&
    gamedata.memory.started &&
    gamedata.memory.timerId == false
  ) {
    runTimer();
  }

  if (
    nome === "mine" &&
    gamedata.mine.started &&
    gamedata.mine.timerId == false
  ) {
    runTimer();
  }

  return (
    <div className="background">
        <div className="container">
          <TabBar />
          <div className="holdInfo">
            {nome !== 'leaderboard'? <StartBtn
              name={nome}
              str={path[nome].started.var}
              startIt={path[nome].startGame}
              runTime={runTimer}
            /> : ()=>null}
            {nome === "mine" ? (
              gamedata.mine.started ? (
                () => null
              ) : (
                <ChoiceBtn />
              )
            ) : (
              () => null
            )}
            {nome !== 'leaderboard'? <Timer tempoProp={path[nome].tempo.var} />:()=>null}
            {nome !== 'leaderboard'? <Points pontos={path[nome].points.var} /> : ()=>null}
          </div>
          <div className="jogoContent">
            {nome !=='leaderboard'? <Jogo
              startIt={path[nome].startGame}
              runTime={runTimer}
              pState={path[nome].points.setVar}
            /> : <Jogo data={gamedata.leaderBoard} />}
          </div>
        </div>
    </div>
  );
};

export default App;
