let str = ' hello js ';
console.log(str.charAt(0));
console.log(str.length);

console.log(str.startsWith('this'));
console.log(str.endsWith('js'));
console.log(str.toLocaleUpperCase());
console.log(str);
console.log(str.toLowerCase());
console.log(str.includes('js'));
console.log(str.replace('js',"JS"));
console.log(str.trim());
console.log(str.trim().split(' '));
console.log(str.trim().split(' ')[0]);
console.log(str.substring(3,15));

let s1 = 'hello';
let s2 = 'Hello';
console.log(s1.localeCompare(s2));
console.log(s1);