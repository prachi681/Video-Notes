// import
const express = require('express');
const cors = require('cors');

// initialize
const app = express();

const userRouter = require('./routers/userRouter');
const noteRouter = require('./routers/noteRouter');

// middleware
app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use('/user', userRouter);
app.use('/note', noteRouter);

const port = 5000;

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add route');
})

app.listen(port, () => { console.log('express server started now') });