function strToHash(str){
  if (!str) {
    return {};
  }
  const parts = str.split(',');
  const map = {};
  for (let i = 0; i < parts.length; i++) {
    let [key, val] = parts[i].split('=');
    key = key.trim();
    val = +val;
    map[key] = val;
  }
  return map;
}
