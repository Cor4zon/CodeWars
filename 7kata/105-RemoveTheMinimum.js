function removeSmallest(numbers) {
  const numbersCopy = [...numbers];
  let minNumberIndex = 0;
  for (let i = 1; i < numbersCopy.length; i++) {
    if (numbersCopy[i] < numbersCopy[minNumberIndex]) {
      minNumberIndex = i;
    }
  }
  numbersCopy.splice(minNumberIndex, 1);
  return numbersCopy;
}
