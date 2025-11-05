// Debugging
/*const obj = undefined;
const propertyValue = obj.propertry; // attempting to access a property of an undefined object
console.log("property Value: " + propertyValue); // this statemnet will cause an error (TypeError: Cannot read properties of undefined (reading 'propertry'))
console.log("This message will never be reached.");*/

// with try-catch block:
const obj = undefined;
try {
    const propertyValue = obj.property;// Attempting to access a propert of an undefined object
    console.log("property Value: " + propertyValue);
    console.log("This message will be reached in case of no error catch.");
} catch (error) {
    console.error("An error occurred while accessing the property:", error.message);
}
console.log("Program continues after error handling.");

// Accessing undefined array object
// without try-Catch block
/*const arr = [1,2,3];
const element = arr[5].nonExistentProperty;//Attempting to access a property of an undefined value
console.log("Array Element: " + element);
console.log("This message will never be reached.");*/

// with try-catch block
const arr = [1,2,3];
try {
    const element = arr[5];// Attempting to access an out-of-bounds array element
    console.log("Array Element: " + element);
    console.log("This message will be reached in case of no error catch.");

} catch (error) {
    console.error("An error occurred while accessing the array element: ", error.message);
}
console.log("Program continues after error handling");