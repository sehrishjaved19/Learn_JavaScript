// Array Iterating (for loop)
const fruits = ["Apple", "Banana", "Cherry","Strawberry"];
for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// forEach method
//Sends a welcome email to each user

function sendWelcomeEmail (email) {
  console.log(`Welcome email sent to ${email}`);
}
const user = [
  { name: 'Alice', email: 'alice@example.com'},
  { name: 'Bob', email: 'bob@example.com'},
  { name: 'Charlie', email: 'charlie@example.com'}
];
user.forEach ((user) => {
  sendWelcomeEmail(user.email);
});

// Map Method

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 500 },
  { name: 'Tablet', price: 300 }
];
products.map((product) => {
  console.log(`The price of ${product.name} is ${product.price}`);
});//map method construst and log messages for each product

//Filter method
const Products = [
  { name: 'Laptop' , price: 1000 },
  { name: 'Smartphone' , price:500 },
  { name: 'Tablet' , price: 300 },
  { name: 'Monitor' , price: 250 },
  { name: 'Keyboard' , price: 50 }
];
function filterProductByPriceRange (Products, minPrice, maxPrice) {
  return Products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
}
const minPrice = 100;
const maxPrice = 500;
const filteredProducts = filterProductByPriceRange(Products , minPrice, maxPrice);
filteredProducts.forEach((product) => {
  console.log(`${product.name} is of ${product.price}`);
});