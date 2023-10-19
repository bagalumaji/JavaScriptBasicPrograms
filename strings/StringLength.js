function length(str) {
  let count = 0;
  for (let ch of str) {
    count += 1;
  }
  return count;
}
const str = "hello";
console.log(length(str));
