function scramble(str1, str2) {
  const dict = {};
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] in dict) {
      dict[str2[i]] += 1;
    } else {
      dict[str2[i]] = 1;
    }
  }
  
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in dict) {
      dict[str1[i]] -= 1;
    }
  }
  for (let key in dict) {
    if (dict[key] > 0) {
      return false;
    }
  }
  return true;
}
