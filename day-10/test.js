const {
  parseAdapters,
  makeAdapterChain,
  countVariations,
  countVariationsWithCache,
} = require("./helpers");

const input1 = `16
10
15
5
1
11
7
19
6
12
4`;

const input2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

const MAX_DIFFERENCE = 3;

describe("Day 10", () => {
  describe("Part 1:", () => {
    test("Input 1", () => {
      const adapters = makeAdapterChain(parseAdapters(input1), MAX_DIFFERENCE);
      const diffOf1s = adapters.filter((i) => i.diff === 1).length;
      const diffOf3s = adapters.filter((i) => i.diff === 3).length;
      expect(diffOf1s).toBe(7);
      expect(diffOf3s).toBe(5);
    });

    test("Input 2", () => {
      const adapters = makeAdapterChain(parseAdapters(input2), MAX_DIFFERENCE);
      const diffOf1s = adapters.filter((i) => i.diff === 1).length;
      const diffOf3s = adapters.filter((i) => i.diff === 3).length;
      expect(diffOf1s).toBe(22);
      expect(diffOf3s).toBe(10);
    });
  });
  describe("Part 2:", () => {
    test("Input 1", () => {
      const adapters = parseAdapters(input1);
      adapters.unshift(0);
      const variations = countVariations(adapters, 3);
      expect(variations).toBe(8);
    });

    test("Input 2 : slow", () => {
      const adapters = parseAdapters(input2);
      adapters.unshift(0);
      const variations = countVariations(adapters, 3);
      expect(variations).toBe(19208);
    });

    test("Input 1 : fast", () => {
      const adapters = parseAdapters(input1);
      adapters.unshift(0);
      const variations = countVariationsWithCache(adapters, 3);
      expect(variations).toBe(8);
    });

    test("Input 2 : fast", () => {
      const adapters = parseAdapters(input2);
      adapters.unshift(0);
      const variations = countVariationsWithCache(adapters, 3);
      expect(variations).toBe(19208);
    });
  });
});
