function reverseString(string) {
  return string.split('').reverse().join('');
}
function spinWords(string){
  return string.split(' ').map(word => word.length >= 5 ? reverseString(word) : word).join(' ')
}

