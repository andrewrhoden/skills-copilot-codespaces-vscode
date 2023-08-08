// Import the required modules
const express = require('express');
const commentcontroller = require('./commentcontroller'); // Replace with the actual path to your commentcontroller module

// Create an instance of the Express application
const app = express();

// Define a router to handle specific routes
const router = express.Router();

// Define a route to handle incoming requests
router.get('/comments', (req, res) => {
    // Call a function from the commentcontroller module to handle the request
    const comments = commentcontroller.getComments(); // Replace with the appropriate function from your module
    res.json(comments);
});

// Mount the router on a specific base path
app.use('/api', router); // Requests to '/api/comments' will be handled by the router

// Start the server
const port = 3000; // You can change this to any port you prefer
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
