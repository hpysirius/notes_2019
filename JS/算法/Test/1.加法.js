// 10 * a + b + b === 10 * b + a
// 问a = ? b = ? 两边相等
for (a = 1; a < 10; a++) {
  for (b = 0; b < 10; b++) {
    if (10 * a + b + b === 10 * b + a) {
      console.log(`a = ${a}, b = ${b}`);
    }
  }
}
