const sliceToRight = (array, start_i, start_j, end_i, end_j, cycle) => {
  const currentArray = [];
  for (let i = start_i; i <= end_i; i++) {
    for (let j = start_j; j <= end_j; j++) {
     currentArray.push(array[i][j]); 
    }
  }
  
  start_i = end_i;
  start_j = end_j;
  end_i = array.length - cycle;
  end_j = array[0].length - cycle;
  return [currentArray, start_i, start_j, end_i, end_j];
}

const sliceToDown = (array, start_i, start_j, end_i, end_j, cycle) => {
  const currentArray = [];
  for (let i = start_i; i <= end_i; i++) {
    for (let j = start_j; j <= end_j; j++) {
     currentArray.push(array[i][j]); 
    }
  }
  
  start_i = end_i;
  start_j = end_j;
  end_i = array.length - cycle;
  end_j = cycle;
  return [currentArray, start_i, start_j, end_i, end_j];
}

const sliceToLeft = (array, start_i, start_j, end_i, end_j, cycle) => {
  const currentArray = [];
  for (let i = start_i; i <= end_i; i++) {
    for (let j = start_j; j <= end_j; j++) {
     currentArray.push(array[i][j]); 
    }
  }
  start_i = cycle;
  start_j = cycle;
  end_i = array.length - cycle;
  end_j = cycle;
  return [currentArray, start_i, start_j, end_i, end_j];
}

const sliceToTop = (array, start_i, start_j, end_i, end_j, cycle) => {
  const currentArray = [];
  for (let i = start_i; i <= end_i; i++) {
    for (let j = start_j; j <= end_j; j++) {
     currentArray.push(array[i][j]); 
    }
  }
  
  start_i = end_i;
  start_j = end_j;
  end_i = cycle
  end_j = array[0].length - cycle;
  return [currentArray, start_i, start_j, end_i, end_j];
}

const makeSlice = (sliceFunc, array, start_i, start_j, end_i, end_j, cycle) => {
  return sliceFunc(array, start_i, start_j, end_i, end_j, cycle);
}

snail = function(array) {
  let start_i = 0;
  let start_j = 0;
  let end_i = 0;
  let end_j = array[0].length-1;
  let cycle = 0;
  const resultArray = [];
  const elementNumber = array[0].length ** 2;
  const operationsArray = ['goRight', 'goDown', 'goLeft', 'goTop'];
  let operation = 0;
  while (resultArray.length < elementNumber) {
    if (operation === 4) {
      cycle++;
      operation = 0;
    }

    if (operationsArray[operation] === 'goRight') {
      const [curArray, new_start_i, new_start_j, new_end_i, new_end_j] = sliceToRight(array, start_i, start_j, end_i, end_j, cycle);
      resultArray.concat(curArray);
      start_i = new_start_i;
      start_j = new_start_j;
      end_i = new_end_i;
      end_j = new_end_j;
    } else if (operationsArray[operation] === 'goDown') {
      const [curArray, new_start_i, new_start_j, new_end_i, new_end_j] = sliceToDown(array, start_i, start_j, end_i, end_j, cycle);
      resultArray.concat(curArray);
      start_i = new_start_i;
      start_j = new_start_j;
      end_i = new_end_i;
      end_j = new_end_j;
    } else if (operationsArray[operation] === 'goLeft') {
      const [curArray, new_start_i, new_start_j, new_end_i, new_end_j] = sliceToLeft(array, start_i, start_j, end_i, end_j, cycle);
      resultArray.concat(curArray);
      start_i = new_start_i;
      start_j = new_start_j;
      end_i = new_end_i;
      end_j = new_end_j;
    } else if (operationsArray[operation] === 'goTop') {
      const [curArray, new_start_i, new_start_j, new_end_i, new_end_j] = sliceToTop(array, start_i, start_j, end_i, end_j, cycle);
      resultArray.concat(curArray);
      start_i = new_start_i;
      start_j = new_start_j;
      end_i = new_end_i;
      end_j = new_end_j;
    }
    operation++;
  }
  console.log(resultArray);
}