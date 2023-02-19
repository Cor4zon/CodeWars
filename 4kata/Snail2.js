
snail = function(array) {
const move = (prevFunction) => {
  const canMoveRight = () => {
  return array[i]?.[j+1];
  };

  const canMoveDown = () => {
//     console.log(array[i+1][j]);
    return array[i+1]?.[j];
  };

  const canMoveLeft = () => {
    return array[i]?.[j-1];
  };

  const canMoveTop = () => {
    return array[i-1]?.[j];
  };

  if (canMoveRight()) {
    resultArray.push(array[i][j]);
    array[i][j] = undefined;
    j++;
    return canMoveRight;
  } else if (canMoveDown()) {
    resultArray.push(array[i][j]);
    array[i][j] = undefined;
    i++;
    return canMoveDown;
  } else if (canMoveLeft()) {
    resultArray.push(array[i][j]);
    array[i][j] = undefined;
    j--;
    return canMoveLeft;
  } else if (canMoveTop()) {
    resultArray.push(array[i][j]);
    array[i][j] = undefined;
    i--;
    return canMoveTop;
  }
  return false;
}

  let i = 0;
  let j = 0;
  const resultArray = [];
  let prevFunction = undefined;
  while (true) {
    console.log(resultArray)
    prevFunction = move(prevFunction);
    if (!prevFunction) {
      break;
    }
  }
  resultArray.push(array[i][j])
      console.log('final')
    console.log(resultArray)
  return resultArray;
}
