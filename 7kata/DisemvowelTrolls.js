const vowels = "aeiouAEIOU";

function disemvowel(str) {
  return str.split('').map(letter => vowels.includes(letter) ? '' : letter).join('');
}
