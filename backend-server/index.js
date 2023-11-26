const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")

const connect = express()

connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({ extended: true }))


let databaseconnection = database.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "9092815611",
    database: "doctorproject"
})
connect.post('/register', (request, response) => {
    let { rname, age, phone, email, roll, password } = request.body
    let sql = "insert into register(name,age,phone,email,roll,username,password)value(?,?,?,?,?,?,?)"
    databaseconnection.query(sql, [rname, age, phone, email, roll, email, password], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

connect.post("/userlogin",(request,response)=>{
    let { username, password } = request.body
    let sql = 'select * from register where username=?'
    databaseconnection.query(sql,[username],(error, result) => {
        if (error) {
            response.send({ "status": "empty_set" })
        }
        else if(result.length > 0){
            let dbusername = result[0].username
            let dbpassword = result[0].password
            let id=result[0].id
            let roll=result[0].roll
            if (dbusername === username && dbpassword === password) {
                response.send({ "status": "success","id":id,"roll":roll })
            }
            else {
                response.send({ "status": "invalid_user" })
            }
        }
        else{
            response.send({"status":"error"})
        }
    })
})

connect.get('/doctor/:id', (request, response) => {
    let { id } = request.params
    let sql = 'select * from register where roll="doctor"  and id=?'
    databaseconnection.query(sql,[id], (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }
    })
})

connect.get('/getdoctordata', (request, response) => {
    let sql = 'select * from register where roll="doctor"'
    databaseconnection.query(sql, (error, result) => {
        if (error) {
            response.send(error)
        }
        else {
            response.send(result)
        }
    })
})

connect.post('/form/:id',(request,response)=>{
    let {id}=request.params
    console.log(id)
    let {cname,age,date,phone,description}=request.body
    let sql = 'insert into appointment(id,name,age,date,phone,description)value(?,?,?,?,?,?)'
    databaseconnection.query(sql,[id,cname,age,date,phone,description],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log(result)
        }
    })
})



connect.get('/dresult/:id',(request,response)=>{
    let { id } = request.params
    let sql='select * from appointment where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.post('/delete/:id',(request,response)=>{
    let id=request.body.id
    let sql="delete from appointment where id=?"
    databaseconnection.query(sql, [id], (error, result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })

})

connect.post('/booking', (request, response) => {
    let { bname, age, gender, number } = request.body
    let sql = "insert into booking(bname,age,gender,number)value(?,?,?,?)"
    databaseconnection.query(sql, [bname, age, gender, number], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

connect.get('/Booking', (request, response) => {
    let sql = 'select * from booking'
    databaseconnection.query(sql, (error, result) => {
        if (error) {
            response.send(error)
        }
        else {
            response.send(result)
        }
    })
})

connect.post('/bdelete/:id',(request,response)=>{
    let id=request.body.id
    let sql="delete from booking where id=?"
    databaseconnection.query(sql, [id], (error, result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })

})

connect.listen(3300,()=>{
    console.log("your server is running in the port 3300")
})