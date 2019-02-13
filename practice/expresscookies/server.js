const express = require('express')

const app = express()

var cookieParser = require('cookie-parser');
app.use(cookieParser('secret'));

app.get('/getcookie', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.sendStatus(200)
})

app.get('/setcookie', (req, res) => {
    res.cookie('token','tokenValueToBeStoredHere')
    res.cookie('signedtoken','tokenValueToBeStoredHere', {signed : true}).send('set')
})

app.listen(3000)