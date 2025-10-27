// Import the Axios library
const axios = require('axios');

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Makw a GET request
axios({
    method: 'GET',
    url: apiUrl
})
.then(response => {
    //handle the successful response
    console.log('Data from the API: ', response.data);
})
.catch(error => {
    //handles error
    console.error('An error occurred: ', error);
});