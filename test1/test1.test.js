const chunkSize = require("./test1");

test("Function should divide the array into many subarrays where each subarray's length should be size's length ", () => {
  expect(chunkSize([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9],
  ]);
});
test("Function should divide the array into many subarrays where each subarray's length should be size's length ", () => {
  expect(chunkSize([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});
test("Function should divide the array into many subarrays where each subarray's length should be size's length ", () => {
  expect(chunkSize([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9],
  ]);
});
test("Function should divide the array into many subarrays where each subarray's length should be size's length ", () => {
  expect(chunkSize([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toEqual([
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
  ]);
});
test("Function should divide the array into many subarrays where each subarray's length should be size's length ", () => {
  expect(chunkSize(["this", "is", "a", "test"], 2)).toEqual([
    ["this", "is"],
    ["a", "test"],
  ]);
});
