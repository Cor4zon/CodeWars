function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((accum, curSheep) => accum + (curSheep ? 1 : 0), 0);
}
