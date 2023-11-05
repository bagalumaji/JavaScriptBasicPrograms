//* Check if a string is empty.

const str = " g";
let f = false;
for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    f = true;
    break;
  }
}
if (f) {
  console.log(str, " is not empty string");
} else {
  console.log("String is empty");
}
