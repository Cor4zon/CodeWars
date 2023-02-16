function inArray(array1,array2){
  const res = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) {
        res.push(array1[i]);
        break;
      }
    }
  }
  return res.sort();
}
