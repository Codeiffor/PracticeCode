const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let profile = {
    user : 'user1',
    email : 'e@mail.com',
    url : 'u.rl'
}

app.get('/profile', (req, res) => {
    res.send(profile)
    console.log('GET complete')
    console.log(req.ip)
})

app.post('/profile', (req,res) => {
    profile = req.body
    res.sendStatus(201)
    console.log('POST complete')
})

app.put('/profile', (req, res) => {
    Object.assign(profile, req.body)
    res.sendStatus(204)
    console.log('PUT complete')
})

app.delete('/profile', (req, res) => {
    profile = {}
    res.sendStatus(204)
    console.log('DELETE complete')
})

app.listen(3000)