const arr1 = [1,2,3, [4,5,6, [7,8,9]]];
console.log(arr1.flat(3));

const arr2 = [1,2,3,4,5];
console.log(arr2.flatMap(v => [v, v * 2]));