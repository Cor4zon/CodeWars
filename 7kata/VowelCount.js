// 1
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

// 2
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

