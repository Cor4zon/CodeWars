// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  let cansCounter = Math.floor(bonus / price);
  let levels = 0;
  let i = 1;
  while (cansCounter - i * i >= 0) {
    cansCounter -= i * i;
    levels++;
    i++;
  }
  return levels;
}
