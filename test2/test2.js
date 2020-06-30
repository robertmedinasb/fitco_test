function maxChar(string) {
  const chars = string.split("");
  let charCounts = {};
  chars.forEach((element) => (charCounts[element] = 0));
  chars.forEach((element) => charCounts[element]++);
  const maxCount = Math.max.apply(null, Object.values(charCounts)); //TO CHANGE
  const key = Object.keys(charCounts).find(
    //TO CHANGE keys => entries
    (key) => charCounts[key] === maxCount
  );
  return key;
}

module.exports = maxChar;
