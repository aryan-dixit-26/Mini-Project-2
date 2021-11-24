import gamedata from "../GameData";
import deck from "../../assets/Cards/makeDeck";
import api from "../../Arch/api";

// USADO JAVASCRIPT COMUM PARA ALTERAR O DOM DIRETAMENTE
// USADO ANTI-PATTERN REMOVENDO O REACT.DIV ESPECIFICO VIA SPLICE E COLOCANDO O REACT.DIV ALTERADO NO LUGAR

const game = gamedata.memory;

const Memory = (props) => {

  if (!game.saveProps) {
    game.saveProps = {'runTime':props.runTime,'startIt':props.startIt,'pState':props.pState}
  }

  clearInterval(gamedata.mine.timerId);
  gamedata.mine.timerId = false;
 
  if(gamedata.mine.over && gamedata.mine.set){
    gamedata.mine.set = false;
  }

  const flipCard = (query, media, order) => {
    if (game.comparar.length === 2) {
      return;
    }

    if (!order) {
      if (query.className.includes("virado")) {
        return;
      }
    }

    const id = query.getAttribute("id");

    let pos = 0;

    game.cards.forEach((ele, idx) => {
      if (ele.props.id === id) {
        pos = idx;
      }
    });

    if (!order) {
      game.comparar.push({ saveQuery: query, saveMedia: media });
    }

    const oldDiv = game.cards[pos].props;

    const newDiv = (
      <div
        className={[order ? "cartas" : "cartas virado"]}
        onClick={() => flipCard(document.getElementById(oldDiv.id), media)}
        value={oldDiv.value}
        id={oldDiv.id}
        style={oldDiv.style}
      >
        <div className="costas"></div>
        <div
          className="frente"
          style={{ backgroundImage: `url(${media})` }}
        ></div>
      </div>
    );

    game.cards.splice(pos, 1);
    game.cards.splice(pos, 0, newDiv);

    order
      ? document.getElementById(oldDiv.id).classList.remove("virado")
      : document.getElementById(oldDiv.id).classList.add("virado");

    if (game.comparar.length === 2) {
      game.tries += 1;
      game.saveProps.pState(game.tries);

      if (game.comparar[0].saveMedia === game.comparar[1].saveMedia) {
        game.found +=1;
        game.comparar = [];

        if(game.found === 6){

          api.postScore('Memory',game.time,game.tries);

          setTimeout(()=>{
            game.over = true;
            game.saveProps.runTime();
            game.saveProps.startIt(true);
          },1500)
          
        }

        return;
      }

      setTimeout(() => {
        const saveOldQuery = game.comparar[0];
        game.comparar = [];

        flipCard(saveOldQuery.saveQuery, saveOldQuery.saveMedia, true);
        flipCard(query, media, true);
      }, 500);
    }
  };

  if (!game.started) {
    const baralho = [...deck(flipCard)];
    let unshuffled = baralho;
    let shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    game.cards = shuffled;

    setTimeout(() => {
      const allCards = document.getElementsByClassName("cartas");

      const copy = [...allCards];

      copy.forEach((e) => {
        e.classList.add("virado");
      });
    }, 200);
  }

  return (
    <div className="memory">
      <div>{game.cards}</div>
    </div>
  );
};

export default Memory;
