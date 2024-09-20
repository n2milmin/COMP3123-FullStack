var http = require("http");
var employees = require("./Employee.js")

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        // http://localhost:8081
        if (req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end('<h1>Welcome to Lab Exercise 03</h1>');
        }

        // http://localhost:8081/employee
        if (req.url === '/employee') {
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            res.end(JSON.stringify(employees.employees.sort()));
        }

        // http://localhost:8081/employee/names
        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            res.end(JSON.stringify(employees.employees.sort((a,b) => {
                return a.firstName.localeCompare(b.firstName)
            })));
        }

        // http://localhost:8081/employee/totalsalary
        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            res.end(JSON.stringify('Total Salary: '+ employees.employees.reduce((n, {Salary}) => n + Salary, 0)));
    }
    //res.end(`{"error": "${http.STATUS_CODES[404]}"}`) // Means we can only open one link before the server stops
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Follow: http://localhost:8081`);
})