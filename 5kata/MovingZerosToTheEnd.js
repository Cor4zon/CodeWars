// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    // 1. count and remove zeros
    console.log(`arr: ${arr}`);
    console.log(arr);
    let i = 0;
    let counter = 0;
    while (i <= arr.length) {
        if (arr[i] === 0) {
            counter += 1;
            arr.splice(i, 1);
            continue;
        }
        i += 1;
    }
    console.log(`new arr: ${arr}`);
    console.log(arr);
    console.log(counter);


    // 2. past zeros in the end
    for (let i = 0; i < counter; i++) {
        arr.push(0);
        }
        console.log('final');
    console.log(arr);
  return arr;
}


moveZeros([]);
moveZeros([0, 0]);
moveZeros([0]);
moveZeros([1]);
moveZeros([false,1,0,1,2,0,1,3,"a"]);
