// LOGICAL OPERATOR
let hasPermission = true;
let isMember = false;

let canAccessResource = hasPermission && isMember; // Logical AND
console.log(canAccessResource);
let canViewPage = hasPermission || isMember; // Logical OR
console.log(canViewPage);
let isDenied = !hasPermission; // Logical NOT
console.log(isDenied);