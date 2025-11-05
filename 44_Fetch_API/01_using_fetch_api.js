const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(apiUrl)
.then(response => {
    return response.json(); // parse the response as JSON
})
.then(data => {
    //handle and use the JSON data
    console.log('Data from API:', data);
})
.catch(error => {
    // handle any errors that occurred during the fetch
    console.error('An error occurred: ', error);
});