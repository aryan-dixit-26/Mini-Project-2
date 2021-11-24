export default function CreateBoard() {
  const arrayOfMines = [[], [], [], [], [], [], [], [], []];

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      arrayOfMines[y].push({
        value: 0,
        revealed: false,
        x: x,
        y: y,
        around: [],
      });
    }
  }

  arrayOfMines.forEach((mineRow, idx) => {
    mineRow.forEach((mine) => {
      if (mine.y - 1 >= 0) {
        mine.around.push({ y: mine.y - 1, x: mine.x });
      }
      if (mine.y - 1 >= 0 && mine.x + 1 <= 8) {
        mine.around.push({ y: mine.y - 1, x: mine.x + 1 });
      }
      if (mine.x + 1 <= 8) {
        mine.around.push({ y: mine.y, x: mine.x + 1 });
      }
      if (mine.y + 1 <= 8 && mine.x + 1 <= 8) {
        mine.around.push({ y: mine.y + 1, x: mine.x + 1 });
      }
      if (mine.y + 1 <= 8) {
        mine.around.push({ y: mine.y + 1, x: mine.x });
      }
      if (mine.y + 1 <= 8 && mine.x - 1 >= 0) {
        mine.around.push({ y: mine.y + 1, x: mine.x - 1 });
      }
      if (mine.x - 1 >= 0) {
        mine.around.push({ y: mine.y, x: mine.x - 1 });
      }
      if (mine.y - 1 >= 0 && mine.x - 1 >= 0) {
        mine.around.push({ y: mine.y - 1, x: mine.x - 1 });
      }
    });
  });

  return arrayOfMines;
}



// Random function used for generating random value of x & y
