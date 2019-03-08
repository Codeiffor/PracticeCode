const express = require('express')
const bodyParser = require('body-parser')
const {check, validationResult} = require('express-validator/check')
const app = express()

app.use(bodyParser.json())

let users =[
    { "username" : "a@b.c", "password" : "abcde" }
]

const addUser = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty())
        return res.status(422).json({errors: errors.array()})
    let obj = {
        "username" : req.body.username,
        "password" : req.body.password
    }
    users.push(obj)

    console.log(`\nuser added : ${JSON.stringify(obj)}`)
    res.send('user added\n')
}

const getUsers = (req, res) =>{
    res.send(users)
    console.log('\nGET complete')
}

const userValidation = [
    check('username').isEmail(),
    check('password').isLength({ min: 5})
]

app.post('/adduser',userValidation, addUser)
app.get('/users', getUsers)
app.listen(3000)