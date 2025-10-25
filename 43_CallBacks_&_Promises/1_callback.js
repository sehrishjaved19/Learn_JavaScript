// Simulated API request with callbacks
function getUserInfo (userId, callback) {
    setTimeout(() => {
        const userInfo = { name : 'John', email: 'john@example.com'};
        callback(userInfo);
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        const posts = ['Post 1', 'Post 2', 'Post 3'];
        callback(posts);
    }, 1500);
}

// Callback hell scenario
getUserInfo(1, (userInfo) => {
    console.log('User Info:', userInfo);

    // Nested callback for posts
    getUserPosts(1, (userposts) => {
        console.log('User Posts:', userposts);

        // You could update your UI here
        // e.g., display userInfo and posts on the web page
    });
});