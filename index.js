const express = require('express');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasks');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', tasksRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
