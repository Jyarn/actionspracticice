const sum = require('./sum.js');

test("assert 1 + 1 = 3", () => {
    expect(sum(1, 1)).toBe(2);
});
