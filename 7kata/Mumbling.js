function accum(s) {
	const arr = s.split('');
  let resString = '';
  for (let i = 0; i < arr.length; i++) {
    resString += arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i) + '-';
  }
  return resString.slice(0, resString.length-1);
}
