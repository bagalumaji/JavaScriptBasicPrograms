
// 
const a = [1, 2, 3, 2, 3, 4, 5, 6, 7];

// const b = [1, 2, 3, 4];
//            0  1  2  3
// a[1]

// const c = new Array();


console.log('length of array : ', a.length);

// add element at the end
let newSize = a.push(10);
console.log('new size : ', newSize);
console.log("array elements  : ", a);
// start la
newSize = a.unshift(8);
console.log('new size : ', newSize);
console.log("array element : ", a);
let ele = a.pop();
console.log(ele);
console.log("array element : ", a);
ele = a.shift();
console.log("deleted element : ", ele);
console.log("array element : ", a);


let index = a.indexOf(2);

console.log("index of 2 ", index);
console.log(a.lastIndexOf(2));


const b = [6, 8, 9];

const c = a.concat(b);

console.log(c);

console.log(a.includes(5));

//a.forEach(e => console.log(e));


a.sort((a, b) => b - a);

console.log(a);

console.log(a.values().next().value)

let t = a.toString()
console.log(t)
console.log(typeof (t))
console.log(a.reverse());

