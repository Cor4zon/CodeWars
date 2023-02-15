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


// smarter
function firstNonRepeatingLetter(s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i].toLowerCase();
    map[char] = (map[char] || 0) + 1;
  }

  console.log(map);

  for (let i = 0; i < s.length; i++) {
    let char = s[i].toLowerCase();
    if (map[char] === 1) {
      return s[i];
    }
  }
  return "";
}

// best
