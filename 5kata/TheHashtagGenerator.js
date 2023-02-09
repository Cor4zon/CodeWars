function generateHashtag (str) {
  str = str.trim();
  if (!str) {
    return false;
  }
  str = str.replace(/\s+/g, " ");

  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  const resultStr = '#' + words.join('');

  if (resultStr.length > 140) {
    return false;
  }
  return resultStr;
}
