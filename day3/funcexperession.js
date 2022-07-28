
let fun1=function demo(){console.log('demo');}

//fun1();

let x = function(){console.log('anonymous function');}

//x();

let y = ()=>{console.log('arrow function');}
//y();


let m1 = () => console.log('arrow with 1 line');

//m1();

let m2 = t => console.log("value : "+t);

//m2(11);

let m3 = (a,b) => {return a+b;};
//console.log(m3(11,22));

let m4 = (a,b) => a+b;

console.log(m4(22,33));
