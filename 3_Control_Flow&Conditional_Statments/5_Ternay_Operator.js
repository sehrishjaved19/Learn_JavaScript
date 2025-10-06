// Ternary Operator
/* The ternary operator is a short way to write an if...else statement.
It’s called ternary because it has three parts.*/

/*Syntax:--> 
condition ? value_if_true : value_if_false;
Explanation:
Condition → The expression to test (like age >= 18)
? → Means “if true”
: (colon) → Means “else”
*/
let age = 20;
let canVote = age >= 18 ? "yes" : "no";
console.log(canVote);
/*Step-by-step:

Condition → age >= 18 → 20 >= 18 → true

Since it’s true → value becomes "yes"

So canVote = "yes"

Output: yes */
