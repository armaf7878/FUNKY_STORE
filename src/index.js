const express = require('express');
const app = express();
const port = 8000;
const dotenv = require('dotenv');

//Parse Json
app.use(express.json());

//Env Config
dotenv.config();

//Connect DB
const db = require('./config/index');

db.connect();
//Route Init
const route = require('./route');
route(app);

app.get('/', (req, res) => { res.send("Server Okay !")});
app.listen(port, () => console.log(`App Listening At HTTP://localhost:${port}`));