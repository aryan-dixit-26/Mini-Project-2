const files = require.context("./", true, /.json$/);

const deck = (flipCard) => {
  const oDobro = [];

  files.keys().forEach((fileName, index) => {
    
    const cardData = files(fileName);
    const primeira = (
      <div
        className={cardData.title + " cartas"}
        onClick={() =>
          flipCard(document.getElementById(1 + cardData.title),cardData.media)
        }
        value={cardData.title}
        id={1 + cardData.title}
       
      >
        <div className='costas'></div>
        <div className='frente' style={{backgroundImage:`url(${cardData.media})`}}></div>
      </div>
    );
    const segunda = (
      <div
        className={cardData.title + " cartas"}
        onClick={() =>
          flipCard(document.getElementById(2 + cardData.title),cardData.media)
        }
        value={cardData.title}
        id={2 + cardData.title}
        
      >
        <div className='costas' ></div>
        <div className='frente' style={{backgroundImage:`url(${cardData.media})`}}></div>
      </div>
    );

    oDobro.push(primeira);
    oDobro.push(segunda);
  });

  return oDobro;
};

export default deck;
