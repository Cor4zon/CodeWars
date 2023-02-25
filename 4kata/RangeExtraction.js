function solution(list){
    let index = 0;
    let counter = 1;
    let resultListString = '';
    for (let i = 1; i < list.length; i++) {
        if (Math.abs(list[i] - list[i-1]) === 1) {
            counter++;
            continue;
        }
        if (counter >= 3) {
            resultListString += `${list[index]}-${list[i-1]},`;
            counter = 1;
            index = i;
            continue;
        }
        if (counter === 2) {
            resultListString += `${list[i-2]},${list[i-1]},`;    
        } else {
            resultListString += `${list[i-1]},`;
        }
        index = i;
        counter = 1;
    }
    if (counter >= 3) {
      resultListString += `${list[index]}-${list[list.length-1]},`;
    } else if (counter == 2) {
      resultListString += `${list[list.length-2]},${list[list.length-1]},`;    
    } else {
      resultListString += `${list[list.length-1]},`;
    }

    return resultListString.slice(0, resultListString.length - 1);
}