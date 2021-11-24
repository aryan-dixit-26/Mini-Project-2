import gamedata from "../GameData";
import "../../assets/Styles/mine.css";
import { useState } from "react";
import CreateBoard from "./createMines";
import api from "../../Arch/api";

// USADO REACT JS PADRÃO

const game = gamedata.mine;

const Mine = (props) => {
  const [grid, setGrid] = useState(game.mines);

  gamedata.memory.saveProps = false;

  clearInterval(gamedata.memory.timerId);
  gamedata.memory.timerId = false;

  const freshBoard = () => {
    const newBoard = CreateBoard();
    game.mines = newBoard;
    sendBombs(8);
  };

  const sendBombs = (amount) => {
    let cc = amount;

    const newGrid = [...game.mines];

    function random(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    while (cc) {
      const y = random(0, newGrid.length - 1);
      const x = random(0, newGrid.length - 1);

      if (newGrid[y][x].value === 0) {
        newGrid[y][x].value = "B";
        cc -= 1;
        continue;
      }
    }

    newGrid.forEach((row) => {
      row.forEach((single) => {
        if (single.value === "B") {
          return;
        }
        single.around.forEach((aro) => {
          if (newGrid[aro.y][aro.x].value === "B") {
            single.value += 1;
          }
        });
      });
    });

    game.mines = newGrid;
    game.set = true;

    setGrid(game.mines);
  };

  const revealcell = (evt) => {
    if (!game.started) {
      return;
    }
    const values = JSON.parse(evt.target.getAttribute("value"));
    const x = values.x;
    const y = values.y;

    const newGrid = [...grid];

    const revealAll = () => {
      newGrid.forEach((row) => {
        row.forEach((single) => {
          single.revealed = true;
        });
      });

      clearInterval(game.timerId);
      game.over = true;
    };

    const revealAround = (array) => {
      array.forEach((e, i) => {
        if (
          newGrid[e.y][e.x].value == "B" ||
          newGrid[e.y][e.x].revealed === true
        ) {
          return;
        }
        newGrid[e.y][e.x].revealed = true;

        if (newGrid[e.y][e.x].value == 0) {
          revealAround(newGrid[e.y][e.x].around);
        }
      });
    };

    if (newGrid[y][x].value !== "B") {
      newGrid[y][x].revealed = true;
    }

    if (newGrid[y][x].value == 0) {
      newGrid[y][x].revealed = true;
      revealAround(newGrid[y][x].around);
    }

    if (newGrid[y][x].value === "B") {
      revealAll();
    }

    game.mines = newGrid;

    let found = 0;

    game.mines.forEach((row) => {
      row.forEach((single) => {
        if (single.revealed) {
          found += 1;

          if (found === 81 - 8) {
            revealAll();
          }
        }
      });
    });

    game.pontos = found;

    props.pState(
      game.over
        ? found === 81 - 8
          ? () => {
              api.postScore("Mines", game.time, null);
              console.log(game.time);
              return "VICTORY";
            }
          : "OVER"
        : found
    );

    setGrid(game.mines);
  };

  if (!game.set) {
    freshBoard();
  }

  return (
    <div className="mine">
      <div className="board">
        {grid.map((allRows, idx) => {
          return allRows.map((single, idx2) => {
            return (
              <div
                value={JSON.stringify(single)}
                onClick={revealcell}
                className={single.revealed ? "square steped" : "square"}
                style={{
                  backgroundColor: [
                    single.revealed
                      ? single.value === "B"
                        ? "red"
                        : "lightgray"
                      : "gray",
                  ],
                }}
              >
                {single.revealed
                  ? single.value !== 0
                    ? single.value
                    : ""
                  : ""}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Mine;
