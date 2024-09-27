const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const SERVER_PORT = process.env.port || 3000;

// From class
// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World');
})
// http://localhost:3000/
app.post('/', (req, res) => {
    res.send('POST - Hello World');
})
// Listen to the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})


// For lab
//http://localhost:3000/hello
app.get("/hello", (req, res) => {
    res.send('<h1>Hello Express JS</h1>');
})
//http://localhost:3000/user/pritesh/patel
app.get('/user', (req, res) => {
    if(req.query.firstname == undefined || req.query.lastname == undefined){
        req.body.firstname = "Pritesh";
        req.body.lastname = "Patel";
    } else {
        req.body.firstname = req.query.firstname;
        req.body.lastname= req.query.lastname;
    }

    res.json(req.body)
} )
//http://localhost:3000/user
app.post('/user/:firstname/:lastname', (req, res) => {
    res.json(req.params)
})