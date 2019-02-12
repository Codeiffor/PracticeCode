const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const logger = require('morgan')

app.use(logger('dev'))
app.use(bodyparser.json())

app.get('/login', (req, res) => {
    res.send('welcome\n')
})

app.post('/login', (req, res) => {
    user = {user:"username",password:"pass123"}
    if(user.user==req.body.user && user.password == req.body.password){
        jwt.sign( req.body, 'secret key', { expiresIn : '1m' }, (err, token) => {
            if(err)
                return res.json({message : 'login successfull but jwt error', err})
            res.json({message : 'login successfull', token })
        })
    }
    else
        res.sendStatus(401)
})

app.post('/apiauth', (req, res) => {
    let token = req.headers['x-access-token']    
    jwt.verify(token, 'secret key', (err, decoded) => {
        if(err)
            return res.send(err)
        console.log(decoded)
        res.send('api access authorised')
    })
})

app.listen(3000)