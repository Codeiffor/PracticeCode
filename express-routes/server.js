const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let profile = [{
    user : 'user1',
    email : 'e@mail.com',
    url : 'u.rl'
}]

app.get('/profile', (req, res) => {
    if(req.query.id)
        res.send(profile[req.query.id])
    else
        res.send(profile)
    console.log('GET complete')
})

app.post('/profile', (req,res) => {
    profile.push(req.body)
    res.sendStatus(201)
    console.log('POST complete')
})

app.put('/profile/:id', (req, res) => {
    Object.assign(profile[req.params.id], req.body)
    res.send('put complete')
    console.log('PUT complete')
})

app.delete('/profile/:id', (req, res) => {
    profile.splice(req.params.id,1)
    res.send('deleted')
    console.log('DELETE complete')
})

app.listen(3000)