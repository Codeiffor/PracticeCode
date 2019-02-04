const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
const errorHandler = require("errorhandler")

const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorHandler())

accounts = []

app.get('/accounts', (req, res) => {
    res.send(accounts)
})

app.post('/accounts', (req, res) => {
    obj = {
        balance : req.body.balance,
        name : req.body.name
    }
    accounts.push(obj)
    res.status(201).send('account created\n')
})

app.put('/accounts/:id', (req, res) => {
    obj = {
        balance : req.body.balance,
        name : req.body.name
    }
    accounts[req.params.id] = obj
    res.status(201).send('account modified\n')
})

app.delete('/accounts/:id', (req, res) => {
    accounts.splice(req.params.id,1)
    res.status(201).send('account deleted\n')
})

app.listen(3000)
