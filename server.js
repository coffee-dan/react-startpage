const express = require('express');
const cors = require('cors')
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

// This CORS compliancy code was taken from the NPM page for the cors 
// package. Something more complex may be needed, especially if it is
// the case that the development server continues to run into the 
// cross origin blocking issue.
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));
app.listen(PORT);