const isPalindrome = (s) => {
  return s === Array.from(s).reverse().join('');
}

longestPalindrome=function(s){
  let longestPalindrome = 0;
  let str = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      str = s.slice(i, j);
      if (isPalindrome(str) && str.length > longestPalindrome) {
        longestPalindrome = str.length;
      }
    }
  }
  return longestPalindrome;
}
