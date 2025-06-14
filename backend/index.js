const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5001;
const db = require('./src/models/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = require('./src/routes/index.routes');

app.use('/api', apiRouter);


app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})