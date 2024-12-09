# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript when performing arithmetic operations with mismatched data types. The `add` function is explicitly typed to expect two numbers, but the code attempts to pass a string as the second argument. This leads to a compilation error.

## Bug

The `bug.ts` file contains the buggy code. The type error occurs because TypeScript's type system prevents the addition of a number and a string directly.  The compiler correctly flags this as an error.

## Solution

The `bugSolution.ts` file provides a corrected version.  Type checking before the operation prevents unexpected behavior. In this example, we added a check that the second argument is a number.