function cakes(recipe, available) {
  let cakeCounter = Infinity;
  for (let ingredient in recipe) {
    if (!(ingredient in available)) {
      return 0;
    }
    let cakeWeCanDo = Math.floor(available[ingredient] / recipe[ingredient]);
    if (cakeWeCanDo < cakeCounter) {
      cakeCounter = cakeWeCanDo;
    }
  }
  return cakeCounter === Infinity ? 0 : cakeCounter;
}
