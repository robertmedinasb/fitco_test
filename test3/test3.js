function reverse(string) {
  let tmparr = string.split("");
  let reversedStr = tmparr.reverse();
  return reversedStr.join("");
}
module.exports = reverse;
