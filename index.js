const express = require("express")
// const mysql = require ("mysql")
const fs = require("fs")
const bodyparser = require("body-parser")
// const uuid = require("uuid/dist/v4")
const {v4: uuidv4 } = require("uuid")
const app = express();

app.use(bodyparser.json());
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password123',
//     database: 'employedb'
// });

// connection.connect((err)=>{
//     if(!err){
//         console.log("db connected are sucessfully..!")
//         // console.log(err)
//     }
//     else{
//        console.log("connection are failed..!")
//        console.log(err)
//     }
// })

app.listen(3000, ()=>{
    console.log("server is running..!")
})

// app.get("/",(req,res)=>{
    
//    fs.readFile("employees.json","utf-8",(err,data)=>{
//       if(err){
//           console.log("err")
//           res.send(err)
//       }
//       else{
//           const data1 = JSON.parse(data)
//           res.send(data1)
//       }
//    })
// })

//     mysqlconnection.query("select * from employee", (err,rows,fields)=>{
//         if(!err){
//             console.log(rows)
//             res.send(rows)
//         }
//         else
//         {console.log(err)}

//     })
// })

// app.post("/employee",(req , res)=>{
//           const employee = {
//             name: req.body.name,
//             age: req.body.age,
//             language: req.body.language,
//           };
          // fs.readFile("employees.json", (error, data) => {
          //   if (error) {
          //     const employees = [];
          //     employees.push(employee);
          //      fs.writeFile("employees.json", JSON.stringify(employees), (error) => {
          //       if (error) console.log(error);
          //       else {
          //         res.send(employees);
          //         console.log("File Created");
          //       }
          //     });
          //   } else {
          //     let employees = [];
          //     employees = JSON.parse(data);
          //     employees.push(employee);
          //     fs.writeFile("employees.json", JSON.stringify(employees), (error) => {
          //       if (error) console.log(error);
          //       else {
          //         res.send(employees);
          //         console.log("File Updated");
          //       }
          //     });
          //   }
          // });
        // });

//         const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

let employees = [];

app.get("/", (req, res) => {
  if (employees.length === 0) {
    res.send("No employees yet!");
  } else {
    res.json(employees);
  }
});

app.post("/", (req, res) => {
  const employee = {
    id : uuidv4(),
    name: req.body.name,
    age: req.body.age,
    language: req.body.language,
  };
  employees.push(employee);
  res.json(employees);
});


app.put("/:id", (req, res) => {
  const id = req.params.id;
  const newEmployee = {
      name: req.body.name,
      age: req.body.age,
      language: req.body.language
  }
  employees = employees.map(employee => {
      if(employee.id === id){
          employee.name = newEmployee.name;
          employee.age = newEmployee.age;
          employee.language = newEmployee.language;
          return employee;
      }
      else {
          return employee;
      }
    })
    res.send(employees)
    console.log(employees)
  })