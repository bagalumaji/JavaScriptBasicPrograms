let number= 1534;
let numberCopied=number;
let power = String(number).length;


let sum = 0;
let cnt=1;
while(number!=0){
    let d = number % 10;
    sum +=d ** power;
    number = Math.floor(number / 10);
}

if(numberCopied === sum){
    console.log("number is armstrong number ",numberCopied);
}else{
    console.log("number is NOT armstrong number ",numberCopied);
}