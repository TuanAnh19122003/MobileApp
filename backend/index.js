const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5001;
const db = require('./src/models/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const roleRouter = require('./src/routes/role.routes');
const userRouter = require('./src/routes/user.routes');
const authRouter = require('./src/routes/auth.routes');

app.use('/api', roleRouter);
app.use('/api', userRouter);
app.use('/api', authRouter)


app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})