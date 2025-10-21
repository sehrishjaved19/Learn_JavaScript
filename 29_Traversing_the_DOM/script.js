const middle = document.querySelector("p:nth-child(2)");
const previous_sibling = middle.previousElementSibling;
const next_sibling = middle.nextElementSibling;
const first_child = middle.firstChild;
const last_child = middle.lastChild;

console.log(middle);
console.log(previous_sibling.textContent); //Output: "first"
console.log(next_sibling.textContent); //Output:  "last"
console.log(first_child.textContent); //Output: "middle"(text node)
console.log(last_child.textContent); //Output:  "null" (text node)
console.log(previous_sibling.firstChild.nodeType);