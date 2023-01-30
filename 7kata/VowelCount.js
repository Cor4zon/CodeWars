const vowels = "aeiou";

function getCount(str) {
  let vowelCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
