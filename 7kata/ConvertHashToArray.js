function convertHashToArray(hash){
  const resultArray = [];
  for (let key in hash) {
    resultArray.push([key, hash[key]]);
  }
  resultArray.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    }
  });
  return resultArray;
}

// best solution
const convertHashToArray = o => Object.entries(o).sort();
