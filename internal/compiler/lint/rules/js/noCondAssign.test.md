# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `js/noCondAssign`

### `0`

```

 lint/js/noCondAssign/reject/1/file.ts:1:16 lint/js/noCondAssign ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not assign variables in loop conditions.

  > 1 │ for (let i = 1; i = 10; i++) {
      │                 ^^^^^^
    2 │   console.log('foo');
    3 │ }

  ℹ It is a common typo to mistype an equality operator as an assignment operator.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
for (let i = 1; i = 10; i++) {
	console.log("foo");
}

```

### `1`

```

 lint/js/noCondAssign/reject/2/file.ts:1:4 lint/js/noCondAssign ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not assign variables in loop conditions.

  > 1 │ if (foo = 'bar') {
      │     ^^^^^^^^^^^
    2 │   console.log('foo');
    3 │ }

  ℹ It is a common typo to mistype an equality operator as an assignment operator.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
if (foo = "bar") {
	console.log("foo");
}

```

### `2`

```

 lint/js/noCondAssign/reject/3/file.ts:1:7 lint/js/noCondAssign ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not assign variables in loop conditions.

  > 1 │ while (foo = 'bar') {
      │        ^^^^^^^^^^^
    2 │   console.log('foo');
    3 │ }

  ℹ It is a common typo to mistype an equality operator as an assignment operator.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
while (foo = "bar") {
	console.log("foo");
}

```

### `3`

```

 lint/js/noCondAssign/reject/4/file.ts:3:9 lint/js/noCondAssign ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not assign variables in loop conditions.

    1 │ do {
    2 │   console.log('foo');
  > 3 │ } while (foo = 'bar')
      │          ^^^^^^^^^^^

  ℹ It is a common typo to mistype an equality operator as an assignment operator.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
do {
	console.log("foo");
} while (foo = "bar");

```

### `4`

```

 lint/js/noCondAssign/reject/5/file.ts:1:1 lint/js/noCondAssign ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not assign variables in loop conditions.

    (foo = bar) ? foo() : bar();
     ^^^^^^^^^

  ℹ It is a common typo to mistype an equality operator as an assignment operator.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```
(foo = bar) ? foo() : bar();

```

### `5`

```
✔ No known problems!

```

### `5: formatted`

```
while ((foo = foo.bar) !== undefined) {
	console.log(foo);
}

```

### `6`

```
✔ No known problems!

```

### `6: formatted`

```
if (foo++ === 3) {
	console.log(foo);
}

```

### `7`

```
✔ No known problems!

```

### `7: formatted`

```
foo = bar ? foo() : bar();

```
