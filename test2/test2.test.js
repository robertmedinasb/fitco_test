const maxChar = require("./test2");

test("Should return the most used char from string passed as parameter", () => {
  expect(maxChar("abcccccccd")).toBe("c");
  expect(maxChar("apple 1231111")).toBe("1");
  expect(maxChar("a123546AaAAAaA")).toBe("A");
  expect(maxChar("thiiiiiis is a test")).toBe("i");
  expect(maxChar("again,ñl[]--,,,,")).toBe(",");
});
test("In case there are more than 1, select the first ", () => {
  expect(maxChar("aeeeeiiii")).toBe("e");
  expect(maxChar("gdfjfdgooooiiii")).toBe("o");
});
