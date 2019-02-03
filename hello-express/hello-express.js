const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`)
  next()
})

app.use((req, res, next) => {
  if(req.query.api_key){
    next()
  }
  else{
    res.status(401).send('invalid api key\n')
  }
})

app.get('/', (req, res) => {
  res.send('hello world\n')
})

app.get('/user', (req, res) => {
  res.send('hello user\n')
})

app.get('/all', (req, res, next) => {
  console.log('inline middleware')
  next(new Error('oops!'))
}, (req, res) => {
  res.send('all\n')
})

app.use((error, req, res, next) => {
  res.status(500).send(error)
})

app.listen(3000)
