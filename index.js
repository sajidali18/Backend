const express = require('express');
const UserRoutes = require('./Routes/UserRoutes');
const database = require('./Config/db');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config();


const app = express();
app.use(cors({
    origin: 'https://66cef1046a57c21e933de05f--heartfelt-panda-813878.netlify.app',
    credentials: true
}));
database();
const port = process.env.PORT || 5000 || 7000;
app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req,res) => {
    res.send("hello this side from is server side");
})

app.use('/users', UserRoutes)
app.listen(port, () => {
    console.log(`server listening on ${port}`);
})

