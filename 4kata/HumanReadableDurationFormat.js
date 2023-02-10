const pluralDate = (number, word) => {
  if (number > 1) {
    return `${number} ${word}s`;
  } else if (number === 1) {
    return `1 ${word}`;
  }
}

function formatDuration (seconds) {
  if (!seconds) {
    return 'now';
  }
  const years = Math.floor(seconds /(3600 * 24 * 365));
  seconds %= 3600 * 24 * 365;
  const days = Math.floor(seconds / (3600 * 24));
  seconds %= 3600 * 24
  const hours = Math.floor(seconds / (3600));
  seconds %= 3600
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  const timeArray = [years, days, hours, minutes, seconds];

  timeArray[0] = pluralDate(timeArray[0], 'year')
  timeArray[1] = pluralDate(timeArray[1], 'day')
  timeArray[2] = pluralDate(timeArray[2], 'hour')
  timeArray[3] = pluralDate(timeArray[3], 'minute')
  timeArray[4] = pluralDate(timeArray[4], 'second')


  for (let i = 0; i < timeArray.length; i++) {
    if (!timeArray[i]) {
      timeArray.splice(i, 1);
      i--;
    }
  }
  if (timeArray.length === 1) {
    return timeArray[0];
  } else if (timeArray.length === 2) {
    return timeArray[0] + ' and ' + timeArray[1]
  }

  let resultTimeString = '';
  for (let i = 0; i < timeArray.length - 2; i++) {
    resultTimeString += timeArray[i] + ', ';
  }
  return resultTimeString + timeArray[timeArray.length - 2] + ' and ' + timeArray[timeArray.length - 1];
}

