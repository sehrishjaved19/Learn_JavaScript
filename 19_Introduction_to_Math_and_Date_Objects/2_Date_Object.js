// Creating date objects

const currentDate = new Date(); // current date and time
console.log(currentDate);

const specificDate = new Date(2025, 0, 15); // October 14, 2025
console.log(specificDate);

const fromMilliSeconds = new Date(1672569600000);
console.log(fromMilliSeconds); // From miliseconds dince the epoch

// Reteriving date components
const date = new Date();
const Year = date.getFullYear(); // Current year
const month = date.getMonth(); //Current month(0-11)
const day = date.getDate(); // Day of the month(1-31)
const hours = date.getHours(); // Hours (0-23)
const minutes = date.getMinutes(); //Minute (0-59)
const seconds = date.getSeconds(); //Seconds(0-59)
console.log(date);  //output: 2025-10-14T18:57:36.598Z
console.log(Year); //output: 2025
console.log(month); //output: 9
console.log(day); //output: 14
console.log(hours); //output: 23
console.log(minutes); //output: 57
console.log(seconds); //output: 36

// Formatting Dates
const formattedDate = date.toLocaleDateString(); 
const formattedTime = date.toLocaleTimeString();
console.log(formattedDate); // output: 15/10/2025
console.log(formattedTime); // output: 00:08:45


