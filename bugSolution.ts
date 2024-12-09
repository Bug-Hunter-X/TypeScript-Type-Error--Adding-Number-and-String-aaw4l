function add(a: number, b: number): number {
  if (typeof b !== 'number') {
    throw new Error('Argument b must be a number');
  }
  return a + b;
}

let result = add(1, 2); // Correct usage: adds two numbers
console.log(result); // Output: 3

try {
  let result2 = add(1, '2'); // Incorrect usage: throws an error
  console.log(result2);
} catch (e) {
  console.error(e.message); // Output: Argument b must be a number
}
