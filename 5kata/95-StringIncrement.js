// todo: закончить

function incrementString (strng) {
  let num = '';
  let firstPartString = '';
  for (let i = strng.length - 1; i >= 0; i--) {
    if (strng[i] <= '9' && strng[i] >= '0') {
      num += strng[i];
    } else {
      firstPartString = strng.slice(0, i);
      break;
    }
  }
  num = Array.from(num).reverse().join();
  console.log(num);
  return +num ? firstPartString + (+num + 1) : firstPartString +  '1';
}