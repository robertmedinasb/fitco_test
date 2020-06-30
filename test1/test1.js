function chunkSize(array, size) {
  let tmpArr = [];
  for (let index = 0; index < array.length; index += size) {
    let chunk = array.slice(index, index + size);
    tmpArr.push(chunk);
  }
  return tmpArr;
}

module.exports = chunkSize;
