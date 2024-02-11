let number= 153;
const str = String(number);
let sum=0;

console.log(str);
for(let i=0;i<str.length;i++){
    let d = Number(str.charAt(i));
    sum += d**str.length;
}

if(number === sum){
    console.log("number is armstring ",number);
}else{
    console.log("number is not armstrong number ",number);
}