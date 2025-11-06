# Arrays in JavaScript — Exercises

This folder contains small hands-on exercises that demonstrate array creation, manipulation, iteration, and common built-in array methods in JavaScript. Each file focuses on a specific topic and includes sample code you can run in the browser console or with Node.js.

## Files

- `01_array_and_manipulating_array.js` — Introduces arrays, indexing, length, push/pop and basic in-place manipulations.
- `02_manipulating_array_methods.js` — Demonstrates array methods that change the array (splice, sort, reverse, etc.).
- `03_non_manipulating_array_methods.js` — Shows non-mutating methods (map, filter, reduce, slice, concat, etc.).
- `04_iterating_arrays.js` — Covers iteration techniques: for, for...of, forEach, and performance notes.
- `05_two_dimensional_array.js` — Works with nested arrays, accessing rows/cols and common patterns.
- `06_using_array.from.js` — Examples for Array.from, converting iterables/array-like objects, and mapping while converting.
- `NOTES.md` — Quick notes and reminders on arrays (read for extra context and tips).
- `README.md` — This file.

## How to run / try the examples

You can run the example files in two ways:

1) Open a browser console
   - Open any simple HTML page (or `about:blank`) and paste/inspect the code from the `.js` files in the DevTools console.
   - Alternatively create a tiny `index.html` that includes the script and open it in your browser.

2) Run with Node.js (recommended for quick local runs)
   - If you have Node installed, run a file from the workspace folder using PowerShell:

```powershell
node .\01_array_and_manipulating_array.js
```

3) Quick interactive testing in REPL
   - Start Node REPL with `node` and paste snippets to experiment interactively.

## Learning outcomes

- Understand difference between mutating and non-mutating array methods.
- Use iteration patterns safely and efficiently.
- Work with nested arrays (2D arrays) and conversions from array-like objects.
- Apply `Array.from` to convert iterables and perform mapping in one step.

## Edge cases & tips

- Empty arrays: check `length === 0` before accessing indices.
- Beware of `sort()` — it sorts values as strings by default; pass a compare function for numeric sort.
- When modifying arrays while iterating, iterate backwards or use non-mutating methods to avoid skipping items.
- Use `Array.isArray()` to confirm arrays vs. objects.

## Customization ideas / exercises

- Implement a simple matrix transpose using nested loops.
- Build utility functions: `unique(arr)` using `Set`, `chunk(arr, size)` to split into subarrays.
- Compare performance of `for` vs `forEach` vs `for...of` for large arrays.

## Troubleshooting

- If a file doesn't run with Node, ensure it doesn't rely on `window` / DOM APIs. Move DOM-specific code to the browser or adapt it for Node.
- For unexpected `sort()` results, provide a compare callback: `(a,b) => a - b`.
