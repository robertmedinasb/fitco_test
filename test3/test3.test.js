const reverse = require("./test3");

test("Should return the string reversed ", () => {
  expect(reverse("apple")).toBe("elppa");
  expect(reverse("robert")).toBe("trebor");
  expect(reverse("medina")).toBe("anidem");
  expect(reverse("fitco")).toBe("octif");
  expect(reverse("test")).toBe("tset");
  expect(reverse("Greetings!")).toBe("!sgniteerG");
  expect(reverse("from")).toBe("morf");
  expect(reverse("my")).toBe("ym");
  expect(reverse("test")).toBe("tset");
});
