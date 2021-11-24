import http from "./http";
import gamedata from "../games/GameData";

export default {
  postScore: (game, time, turns) => {
    
    const path = "/" + game;

    http.get(path).then((req) => {
      const usersAmount = req.data.length;

      if (!gamedata.username) {
        gamedata.username = "Anom" + (usersAmount + 1);
      }

      const newRecord =  {name:gamedata.username, time: time, turns: turns } ;

      let nameExist = false;

      const getAnomId = Number(gamedata.username.split("m")[1]);

      req.data.forEach((each) => {
        if (getAnomId == each.id) {
          nameExist = true;
        }
      });

      if (nameExist) {
        http.put(path + "/" + getAnomId, newRecord).then(() => {
          console.log("updated");
          nameExist = false;
        });

        return;
      }

      http.post(path, newRecord).then(() => {
        console.log("posted");
        nameExist = false;
      });
    });
  },
};
