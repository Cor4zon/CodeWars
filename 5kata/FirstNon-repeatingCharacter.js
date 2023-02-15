function firstNonRepeatingLetter(s) {
  while (s.length) {
    const currentSymbol = s[0];
    if (s.toLowerCase().slice(1, s.length).split("").includes(currentSymbol.toLowerCase())) {
      s = s.replaceAll(currentSymbol.toUpperCase(), "");
      s = s.replaceAll(currentSymbol.toLowerCase(), "");
    } else {
      return currentSymbol;
    }
  }
  return "";

}
