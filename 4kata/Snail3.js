
snail = function(array) {
const move = () => {
  const canMoveRight = () => {
  return array[i]?.[j+1];
  };

  const canMoveDown = () => {
    return array[i+1]?.[j];
  };

  const canMoveLeft = () => {
    return array[i]?.[j-1];
  };

  const canMoveTop = () => {
    return array[i-1]?.[j];
  };
  
  const makeMove = () => {
      if (canMoveRight()) {
      resultArray.push(array[i][j]);
      array[i][j] = undefined;
      prevDirection = 'right';
      j++;
      return true;
    } else if (canMoveDown()) {
      resultArray.push(array[i][j]);
      array[i][j] = undefined;
      prevDirection = 'down';
      i++;
      return true;    
    } else if (canMoveLeft()) {
      resultArray.push(array[i][j]);
      array[i][j] = undefined;
      prevDirection = 'left';
      j--;
      return true;
    } else if (canMoveTop()) {
      resultArray.push(array[i][j]);
      array[i][j] = undefined;
      prevDirection = 'top';
      i--;
      return true; 
    }
    return false;
  }

  const checkPrevDirection = () => {
    if (prevDirection === 'right' && canMoveRight()) {
      resultArray.push(array[i][j]);
      array[i][j] = undefined;
      j++;
      return true;
    } else if (prevDirection === 'down' && canMoveDown()) {
      resultArray.push(array[i][j]);
      array[i][j] = undefined;
      prevDirection = 'down';
      i++;
      return true;    
    } else if (prevDirection === 'left' && canMoveLeft()) {
      resultArray.push(array[i][j]);
      array[i][j] = undefined;
      prevDirection = 'left';
      j--;
      return true;
    } else if (prevDirection === 'top' && canMoveTop()) {
      resultArray.push(array[i][j]);
      array[i][j] = undefined;
      prevDirection = 'top';
      i--;
      return true; 
    }
    return false;
  }

  if (checkPrevDirection()) {
    return true;
  }

  return makeMove();
}

  if (array[0].length === 0) {
    return [];
  }
  
  let i = 0;
  let j = 0;
  const resultArray = [];
  let prevDirection = '';
  while (move()) { }
  resultArray.push(array[i][j])
  return resultArray;
}