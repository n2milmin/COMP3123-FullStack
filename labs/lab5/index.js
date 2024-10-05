const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const router = express.Router();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, '/home.html'));
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  res.send( fs.readFileSync( path.join(__dirname, '/user.json')));
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req,res) => {
  const { username, password } = req.body;

  const data = fs.readFileSync("user.json", "utf8"); 
  if(!data){
    return res.send({status: false, msg: "Data not found"})
  }

  const user = JSON.parse(data); 

  if(user.username != username){ 
    return res.send({status: false, msg: "User Name is invalid"}); 
  } 
  if(user.password != password) { 
    return res.send({status: false, msg: "Password is invalid"}); 
  } 
  
  res.send({status: true, msg: "User is valid"});   
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logout.</b>`);
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
const errorHandlingMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  const errorObj = { 
      status: 500,
      message: 'Something broke',
      err: err.message
  };
  res.satus(500).send(errorObj);
}

app.use(errorHandlingMiddleware)


app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));